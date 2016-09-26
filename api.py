#!flask/bin/python
#Load all the includes
from flask import Flask, render_template, request, jsonify
from werkzeug import secure_filename
import base64
import os
import MySQLdb
import MySQLdb.cursors
import yagmail

UPLOAD_FOLDER = './uploads'
app.config['UPLOADFOLDER'] = UPLOAD_FOLDER
#initialize SMTP server
yag = yagmail.SMTP()

#Initialize database connection
database = MySQLdb.connect(host = "localhost", user = "root", passwd = "root", db = "schoolclash")
c = database.cursor()

#Execute our query to fetch the data from the CMS-Database
c.execute("SELECT question_id, title, text, x, y, completed FROM locations")
locations = database.fetchone()

c.execute("SELECT answer, question_id, correct FROM answers")
answers = database.fetchone()

c.execute("SELECT question FROM questions")
questions = database.fetchone()


#Define the route to the API call (GET /api/content) and spit out json
app.route('/api/question')
def get_question():
    for i in answers:
        if isMultiplechoice:
            return jsonify(
                id=answers['question_id'],
                answer=answers['answer'],
                multiplechoice="true",
                questions=[dict(answer1="dit is een fout antwoord", answer2="dit is een fout antwoord", answer3="dit is een goed antwoord")]
        )
        else:
            return jsonify(
                id=answers['question_id'],
                answer=answers['answer'],
                multiplechoice="true",
                questions=answer3="dit is een goed antwoord"
        )

#Output all location data from query 
@app.route('/api/locations')
def get_locations():
    for i in locations:
        return jsonify(
            questionid=locations['question_id'],
            title=locations['title'],
            text=locations['text'],
            long=locations['x'],
            lat=locations['y'],
            completed=locations['completed']
        )     
#Open an image and encode it in Base64 to make it transportable over json
image = open('image.png', 'rb')
imageread = image.read()
imageb64 = base64.encodestring(imageread)

#Initialize Flask
app = Flask(__name__)
app.secret_key = os.urandom(30)

#This is the data spitten out by /api/question | Note to self: use data from the Database in this
tasks = [

        {
                    'id': 1,
                    'multipleChoice': True,
                    'answer': u'Dit is een goed antwoord',
                    'validAnswer': True
                
        },
        {
                
                    'id': 1,
                    'multipleChoice': True,
                    'answer': u'Dit is een goed antwoord',
                    'validAnswer': True
        }

]

#This is the data spitten out by /api/content | Note to self: use data from the Database in this
content = [
      {
              "title": "2009",
              "content": "blablalblalbla",
              "img": "1.jpg"
            
      },
      {
              "title": "2008",
              "content": "blablalblalbla",
              "img": "2.jpg"
            
      },
      {
              "title": "2011",
              "content": "blablalblalbla",
              "img": "3.jpg"
            
      }
]

#Define the route to the API call (GET /api/content) and spit out json
@app.route('/api/content', methods=['GET'])
def get_content():
    return jsonify({'content': content})
headers = {'Content-Type': 'application/json'}

#Define the route to the API call (GET /api/image) and spit out json
@app.route('/api/image', methods=['GET'])
def get_b64Image():
    return jsonify({'image': imageb64})
app.secret_key = os.urandom(30)
headers = {'Content-Type': 'application/json'
@app.route('/upload')
def upload_file():
return render_template('upload.html')

@app.route('/uploader', methods = ['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
           f = request.files['file']
           f.save(secure_filename(f.filename))
           return 'file uploaded successfully'
    contents = "<h1>PDF - Verstuurd</h1> je kunt de pdf bestanden vinden in de bijlage"
    file_names = f.filename
    yag.send("test@schoolclash.eu", "PDF - Aangekomen", contents, attachments=file_names)
if __name__ == '__main__':
    app.run(debug=True)
