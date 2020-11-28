
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
        print(request.json['groupmate1'])
        sql = "INSERT INTO groups(groupmate1, groupmate2, groupmate3, groupmate4, groupmate5, groupmate6, isOpen, monday, tuesday, wednesday, thursday,friday, saturday, sunday, timezone, inPerson, virtual, async, procast,other, teamname) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"
        cur = connection.execute(sql, (request.json['groupmate1'], request.json['groupmate2'], request.json['groupmate3'], request.json['groupmate4'], request.json['groupmate5'], request.json['groupmate6'], request.json['isOpen'], request.json['monday'], request.json['tuesday'], request.json['wednesday'], request.json['thursday'], request.json['friday'], request.json['saturday'], request.json['sunday'], request.json['timezone'], request.json['inPerson'], request.json['virtual'], request.json['async'], request.json['procast'], request.json['other'], request.json['teamname'],))
        return '', 201

@backend.app.route('/api/groups/<email>', methods=['GET', 'PATCH'])
@cross_origin(allow_headers=['Content-Type'])
def get_unique_group(email):
    connection = backend.model.get_db()

    if request.method == 'GET':
        sql = "SELECT * FROM groups WHERE groupmate1 = ? OR groupmate2 = ? OR groupmate3 = ? OR groupmate4 = ? OR groupmate5 = ? OR groupmate6 = ?;"
        cur = connection.execute(sql, (email,email,email,email,email,email))
        response = cur.fetchone()
        return flask.jsonify(group = response)
    
    if request.method == 'PATCH':
        print(request)
        sql = "SELECT * FROM groups WHERE groupID = ?;"
        cur = connection.execute(sql, (request.json['groupID'],))
        response = cur.fetchone()
        for i in range(1,7):
            groupmate = 'groupmate' + str(i)
            if (response[groupmate] == ''):
                sql = "UPDATE groups SET " + groupmate + " = ? WHERE groupID = ?;"
                cur = connection.execute(sql, (email, response['groupID']))
                return '', 200

@backend.app.route('/api/groups/<int:id>/<email>', methods=['DELETE'])
@cross_origin(allow_headers=['Content-Type'])
def delete_group_member(id, email):
    connection = backend.model.get_db()
    
    sql = "SELECT * FROM groups WHERE groupID = ?;"
    cur = connection.execute(sql, (id,))
    response = cur.fetchone()

    # See if this is last member to be deleted
    group_count = 0
    groupmate_to_update = ''
    i = 0
    if response['groupmate1'] != '':
        group_count += 1
        if response['groupmate1'] == email:
            response['groupmate1'] = ''
            group_count -= 1
            groupmate_to_update = 'groupmate1'
            i = 1
    if response['groupmate2'] != '':
        group_count += 1
        if response['groupmate2'] == email:
            response['groupmate2'] = ''
            group_count -= 1
            groupmate_to_update = 'groupmate2'
            i = 2
    if response['groupmate3'] != '':
        group_count += 1
        if response['groupmate3'] == email:
            response['groupmate3'] = ''
            group_count -= 1
            groupmate_to_update = 'groupmate3'
            i = 3
    if response['groupmate4'] != '':
        group_count += 1
        if response['groupmate4'] == email:
            response['groupmate4'] = ''
            group_count -= 1
            groupmate_to_update = 'groupmate4'
            i = 4
    if response['groupmate5'] != '':
        group_count += 1
        if response['groupmate5'] == email:
            response['groupmate5'] = ''
            group_count -= 1
            groupmate_to_update = 'groupmate5'
            i = 5
    if response['groupmate6'] != '':
        group_count += 1
        if response['groupmate6'] == email:
            response['groupmate6'] = ''
            group_count -= 1
            groupmate_to_update = 'groupmate6'
            i = 6
    
    if groupmate_to_update == '':
        return '', 405
    if group_count > 0:
        for index in range(i, 6):
            groupmate = 'groupmate' + str(index)
            groupmate_next = 'groupmate' + str(index + 1)
            groupmate_next_value = response[groupmate_next]
            sql = "UPDATE groups SET " + groupmate + " = ? WHERE groupID = ?;"
            cur = connection.execute(sql, (groupmate_next_value, response['groupID']))
        sql = "UPDATE groups SET groupmate6 = \'\' WHERE groupID = ?;"
        cur = connection.execute(sql, (response['groupID'],))

    else:
        sql = "DELETE FROM groups WHERE groupID = ?;"
        cur = connection.execute(sql, (response['groupID'],))
    return '', 200