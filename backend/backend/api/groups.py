
import flask
from flask import session, abort, request
from flask_cors import CORS,cross_origin
import backend


@backend.app.route('/api/groups/', methods=['GET','POST','PATCH'])
@cross_origin(allow_headers=['Content-Type'])
def get_groups():
    connection = backend.model.get_db()

    if request.method == 'GET':
        cur = connection.execute((
            'SELECT * FROM groups'
        ))
        response = cur.fetchall()
        return flask.jsonify(groups = response)
    
    if request.method == 'POST':
        cur = connection.execute((
            'INSERT INTO groups(groupmate1, groupmate2, groupmate3, groupmate4,' 
            'groupmate5, groupmate6, isOpen, monday, tuesday, wednesday, thursday,'
            'friday, saturday, sunday, timezone, inPerson, virtual, async, procast,'
            'other, teamname) values (\'{}\',\'{}\',\'{}\',\'{}\',\'{}\',\'{}\',{},'
            '{},{},{},{},{},{},{},\'{}\',{},{},{},{},\'{}\',\'{}\');'
            .format(request.json['groupmate1'], request.json['groupmate2'], request.json['groupmate3'],
                request.json['groupmate4'], request.json['groupmate5'], request.json['groupmate6'],
                request.json['isOpen'], request.json['monday'], request.json['tuesday'], request.json['wednesday'],
                request.json['thursday'], request.json['friday'], request.json['saturday'],
                request.json['sunday'], request.json['timezone'], request.json['inPerson'], request.json['virtual'],
                request.json['async'], request.json['procast'], request.json['other'], request.json['teamname']
            )
        ))
        return '', 201

    if request.method == 'PATCH':
        cur = connection.execute((
            'UPDATE groups SET {} = \'{}\' WHERE groupID = {};'.format(
                request.json['update_column'], request.json['update_value'], 
                request.json['groupID']
            )
        ))
        return '', 200
