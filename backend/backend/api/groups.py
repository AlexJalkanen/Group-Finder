
import flask
from flask import session, abort
import backend

@backend.app.route('/api/groups/', methods=['GET','POST','PATCH'])
def get_groups():
    connection = backend.model.get_db()

    if request.method == 'GET':
        cur = connection.execute((
            f'SELECT * FROM groups'
        ))
        response = cur.fetchall()
        return flask.jsonify(groups = response)
    
    if request.method == 'POST':
        cur = connection.execute((
            f'INSERT INTO groups(groupID, groupmate1, groupmate2, groupmate3, groupmate4,' 
            f'groupmate5, groupmate6, isOpen, monday, tuesday, wednesday, thursday,'
            f'friday, saturday, sunday, timezone, inPerson, virtual, async, procast,'
            f'other, teamname) values ({request.json['groupID']},\'{request.json['groupmate1']}\','
            f'\'{request.json['groupmate2']}\',\'{request.json['groupmate3']}\',\'{request.json['groupmate4']}\','
            f'\'{request.json['groupmate5']}\',\'{request.json['groupmate6']}\',{request.json['isOpen']},'
            f'{request.json['monday']},{request.json['tuesday']},{request.json['wednesday']},'
            f'{request.json['thursday']},{request.json['friday']},{request.json['saturday']},'
            f'{request.json['sunday']},\'{request.json['timezone']}\',{request.json['inPerson']},'
            f'{request.json['virtual']},{request.json['async']},{request.json['procast']},'
            f'\'{request.json['other']}\',\'{request.json['teamname']}\';'
        ))
        return '', 201

    if request.method == 'PATCH':
        cur = connection.execute((
            f'UPDATE groups SET {request.json['update_column']} = \'{request.json['update_value']}\''
            f'WHERE groupID = {request.json['groupID']};'
        ))
        return '', 200
