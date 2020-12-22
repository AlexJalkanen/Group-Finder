var cluster = require('cluster');

if (cluster.isMaster) {
    var cpuCount = require('os').cpus().length;

    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }

    cluster.on('exit', (worker) => {
        console.log('Worker ' + worker.id + ' died :(');
        cluster.fork();
    });
} 
else {
    var AWS = require('aws-sdk');
    var express = require('express');
    var bodyParser = require('body-parser');
    const { v4: uuidv4 } = require('uuid');
    var cors = require('cors')
    var admin = require('firebase-admin');
    admin.initializeApp({
        credential: admin.credential.applicationDefault(),
        databaseURL: 'https://group-finder-296809.firebaseio.com'
    });

    AWS.config.region = process.env.REGION;

    var ddb = new AWS.DynamoDB.DocumentClient();

    var ddbTable =  process.env.GROUP_FINDER_TABLE || 'Group-Finder';
    var ddbTableUsers = process.env.GROUP_FINDER_USERS_TABLE || 'Group-Finder-Users';
    var app = express();
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());
    app.use(cors());
    app.use(decodeIDToken);

    async function decodeIDToken(req, res, next) {
        if (req.headers.authorization &&
            req.headers.authorization.split(' ')[0] === 'Bearer') {
          const idToken = req.headers.authorization.split('Bearer ')[1];
      
          try {
            const decodedToken = await admin.auth().verifyIdToken(idToken);
            req['currentUser'] = decodedToken;
          } catch (err) {
            console.log(err);
          }
        }
      
        next();
      }

    const scanTable = async () => {
        const params = {
            TableName: ddbTable,
        };
    
        const scanResults = [];
        let items;
        do {
            items =  await ddb.scan(params).promise();
            items.Items.forEach((item) => scanResults.push(item));
            params.ExclusiveStartKey  = items.LastEvaluatedKey;
        } while(typeof items.LastEvaluatedKey !== "undefined");
        return scanResults;
    };

    const getUserGroup = async (email) => {
        const params = {
            TableName: ddbTableUsers,
            Key: {
                email: email
            }
        }
        try {
            const data = await ddb.get(params).promise();
            return data['Item'];
        }
        catch (error) {
            return null;
        }
    }

    const updateUserGroup = async (email, groupID) => {
        try {
            const group = await getUserGroup(email);
            if (group) {
                const userParams = {
                    TableName: ddbTableUsers,
                    Key: {
                        email: email
                    },
                    UpdateExpression : "SET #groupID = :groupID",
                    ExpressionAttributeNames : {
                        "#groupID" : "groupID"
                    },
                    ExpressionAttributeValues : {
                        ":groupID" : groupID
                    },
                    ReturnValues: "UPDATED_NEW"
                }
                const updateData = await ddb.update(userParams).promise();
                return updateData;
            }
            else {
                const item = {
                    'email': email,
                    'groupID': groupID
                };
                const createParams = {
                    TableName: ddbTableUsers,
                    Item: item
                }
                const createData = await ddb.put(createParams).promise();
                return createData;
            }
        }
        catch (error) {
            return null;
        }
    }

    const createNewUser = async (email, groupID, SEP, RPC) => {
        try {
            const item = {
                'email': email,
                'groupID': groupID,
                'SEP': SEP,
                'RPC': RPC
            }
            const createParams = {
                TableName: ddbTableUsers,
                Item: item
            }
            const createData = await ddb.put(createParams).promise();
            return createData;
        }
        catch (error) {
            return null;
        }
    }

    app.get('/health', async (req, res) => {
        res.status(200).send("Healthy!");
    });

    app.get('/groups/', async (req, res) => {
        if (!req['currentUser']) { 
            res.status(403).send('You must be logged in!');
            return;
        }
        try {
            const results = await scanTable();
            res.status(200).send(results);
        }
        catch (error) {
            res.status(400).send(error);
        }
    });

    app.post('/groups/', async (req, res) => {
        if (!req['currentUser']) { 
            res.status(403).send('You must be logged in!');
            return;
        }

        req.body.other.slice(0, 500);
        for (let i = 0; i < req.body.groupmates.length; i++) {
            req.body.groupmates[i][0].slice(0, 18);
            if (!req.body.groupmates[i][0].endsWith("@umich.edu")) {
                res.status(400).send(req.body.groupmates[i][0] + " is an invalid email.");
                return;
            }
            try {
                const group = await getUserGroup(req.body.groupmates[i][0]);
                if (group && group.groupID !== '') {
                    res.status(400).send(req.body.groupmates[i][0] + " is already in another group.");
                    return;
                }
            }
            catch (error) {
                res.status(400).send(error);
                return;
            }
        }

        const groupID = uuidv4();
        const emails = [];
        for (let i = 0; i < req.body.groupmates.length; i++) {
            emails.push(req.body.groupmates[i][0]);
            await createNewUser(req.body.groupmates[i][0], groupID, req.body.groupmates[i][1], req.body.groupmates[i][2]);
        }
        const item = {
            'groupID': groupID,
            'groupmates': emails,
            'monday': req.body.monday,
            'tuesday': req.body.tuesday,
            'wednesday': req.body.wednesday,
            'thursday': req.body.thursday,
            'friday': req.body.friday,
            'saturday': req.body.saturday,
            'sunday': req.body.sunday,
            'timezone': req.body.timezone,
            'async': req.body.async,
            'procast': req.body.procast,
            'other': req.body.other,
        };
        const params = {
            TableName: ddbTable,
            Item: item
        };
        try {
            const data = await ddb.put(params).promise();
            res.status(201).send(item);
        }
        catch (error) {
            res.status(400).send(error);
        }
    });

    app.get('/groups/:email', async (req, res) => {
        if (!req['currentUser']) { 
            res.status(403).send('You must be logged in!');
            return;
        }
        const email = req.params.email;
        const userParams = {
            TableName: ddbTableUsers,
            Key: {
                email: email
            }
        };
        try {
            const userData = await ddb.get(userParams).promise();
            if (userData['Item']['groupID']) {
                const groupParams = {
                    TableName: ddbTable,
                    Key: {
                        groupID: userData['Item']['groupID']
                    }
                }
                const data = await ddb.get(groupParams).promise();
                res.status(200).send(data['Item']);
            }
            else {
                res.status(400).send("User not in a group");
            }
        }
        catch (error) {
            res.status(400).send(error);
        }
    });

    app.patch('/groups/:email', async (req, res) => {
        if (!req['currentUser']) { 
            res.status(403).send('You must be logged in!');
            return;
        }
        const email = req.params.email;
        try {
            const currentGroup = await getUserGroup(email);
            if (currentGroup && currentGroup['groupID'] !== '') {
                res.status(400).send("Already in a group!");
                return;
            }
        }
        catch (error) {
            res.status(400).send();
            return;
        }
        
        try { 
            const updateData = await updateUserGroup(email, req.body.groupID);
            const params = {
                TableName: ddbTable,
                Key: {
                    groupID: req.body.groupID
                },
                UpdateExpression : "SET #gm = list_append(#gm, :email)",
                ExpressionAttributeNames : {
                    "#gm" : "groupmates"
                },
                ExpressionAttributeValues : {
                    ":email" : [email]
                },
                ReturnValues: "UPDATED_NEW"
            };
            const data = await ddb.update(params).promise(); 
            res.status(200).send(data);
            
        }
        catch (err) {
            res.status(400).send(err);
        }
    });

    app.delete('/groups/:email', async (req, res) => {
        if (!req['currentUser']) { 
            res.status(403).send('You must be logged in!');
            return;
        }
        const email = req.params.email;
        try {
            const currentGroup = await getUserGroup(email);
            if (!currentGroup || currentGroup.groupID !== req.body.groupID) {
                res.status(400).send("Not in this group!");
                return;
            }
        }
        catch (error) {
            res.status(400).send();
            return;
        }
        var oldParams = {
            TableName: ddbTable,
            Key: {
                groupID: req.body.groupID
            }
        };
        try { 
            const updateData = await updateUserGroup(email, "");

            const data = await ddb.get(oldParams).promise();
            if (data['Item']['groupmates'].length === 1) {
                const deleteParams = {
                    TableName: ddbTable,
                    Key: {
                        groupID: req.body.groupID
                    }
                }
                const deleteData = await ddb.delete(deleteParams).promise();
                res.status(200).send(JSON.stringify(deleteData));
            }
            else {
                var i;
                for (i = 0; i < data['Item']['groupmates'].length; i++) {
                    if (data['Item']['groupmates'][i] === email) break;
                }
                data['Item']['groupmates'].splice(i, 1);
                const updateParams = {
                    TableName: ddbTable,
                    Key: {
                        groupID: req.body.groupID
                    },
                    UpdateExpression : "SET #gm = :newGM",
                    ExpressionAttributeNames : {
                        "#gm" : "groupmates"
                    },
                    ExpressionAttributeValues : {
                        ":newGM" : data['Item']['groupmates']
                    },
                    ReturnValues: "UPDATED_NEW"
                };
                const newData = await ddb.update(updateParams).promise();
                res.status(200).send(JSON.stringify(newData));
            }
        }
        catch (err) {
            res.status(400).send(err);
        }
    });

    var port = process.env.PORT || 3000;

    var server = app.listen(port, function () {
        console.log('Server running at http://127.0.0.1:' + port + '/');
    });
}