#!flask/bin/python
#Load all the includes
from flask import Flask, render_template, request, current_app
from werkzeug import secure_filename
from flask_jsonpify import jsonify
import base64
import os
import MySQLdb
import MySQLdb.cursors
import json
from functools import wraps

#Initialize our application
app = Flask(__name__)

UPLOAD_FOLDER = './uploads'
app.config['UPLOADFOLDER'] = UPLOAD_FOLDER

#Initialize database connection
database = MySQLdb.connect(host = "localhost", user = "root", passwd = "root", db = "cms")
c = database.cursor()

#Execute our query to fetch the location-data from the CMS-Database
c.execute("SELECT question_id, title, text, x, y, completed, image FROM locations")
locations = c.fetchall()
#For row in query_results define variables(dict)
for row in locations:
	db_questionid = row[0]
	db_title = row[1]
	db_text = row[2]
	db_long = row[3]
	db_lat = row[4]
	db_completed = row[5]
	db_image = row[6]
#This part encodes the image to base64 so it can be transported over JSON
	db_image_location = "/var/www/cms/public/uploads/location/image/%s/%s" % (db_questionid, db_image)
	image = open(db_image_location, 'rb')
	imageread = image.read()
	imageb64 = base64.encodestring(imageread)
#Print all the rows to test if oswur query gets all the data
d = {}
for i, row in enumerate(locations):
	l = []
	for col in range(0, len(row)):
		l.append(row[col])
	d[i] = l
	for s in range(0, len(d)):
		for x in d[s]: print x

#Execute our query to fetch question-data from the CMS-Database
c.execute("SELECT answer, question_id, correct FROM answers")
answers = c.fetchall()
for row in answers:
	db_answer = row[0]
	db_question_id = row[1]
	db_correct = row[2]
#For row in query_results define variables(dict)
c.execute("SELECT question FROM questions")
questions = c.fetchall()
for row in questions:
	db_questions = row[0]
#Create an include-able function to add JSONP support and allow use of /api/{call}?callback=callback
def support_jsonp(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        callback = request.args.get('callback', False)
        if callback:
            content =  str(f().data) 
            return current_app.response_class(content, mimetype='application/json')
        else:
            return f(*args, **kwargs)
    return decorated_function
#Define the route to the API call (GET /api/content) and spit out json
@app.route('/api/question')
@support_jsonp
def get_question():
    for row in answers:
        if db_answer:
            return jsonify(
                id=db_question_id,
                answer=db_answer,
                multiplechoice="true",
                questions=[dict(answer1="dit is een fout antwoord", answer2="dit is een fout antwoord", answer3="dit is een goed antwoord")],
		correct=db_correct       
)
        else:
            return jsonify(
                id=db_question_id,
                multiplechoice="false",
                questions=db_questions,
        )

content = {
		'title' : db_title,
		'content' : db_text.decode("ISO-8859-1"),
		'img' :imageb64
}


#This is the data spitten out by /api/content | Note to self: use data from the Database in this
@app.route('/api/content')
@support_jsonp
def get_content():
	for row in locations:
        	return jsonify({"content": content})
locdata = {
            'id' : db_questionid,
            'title' : db_title,
            'text' : db_text.decode("ISO-8859-1"),
            'long' : db_long,
            'lat' : db_lat,
            'completed' : db_completed,
            'img' : imageb64

}
#Output all location data from query 
@app.route('/api/location')
@support_jsonp
def get_locations():
    for row in locations:
	return jsonify({"content": locdata})

#Define the route to the API call (GET /api/image) and spit out json
@app.route('/api/image', methods=['GET'])
def get_b64Image():
    return jsonify({'image': imageb64})
app.secret_key = os.urandom(30)
headers = {'Content-Type': 'application/json'}
#Make the application run itself on 0.0.0.0 and allow debugging while developing
if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
