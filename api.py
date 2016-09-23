#!flask/bin/python
from flask import Flask, jsonify
import base64
import os
import MySQLdb
import MySQLdb.cursors

database = MySQLdb.connect(host = "localhost", user = "root", passwd = "root", db = "schoolclash")
c = database.cursor()

c.execute("select id, multipleChoice, answer, validAnswer FROM schoolclash")
questions = database.fetchone()

for i in questions:
    print questions['id']
    print questions['multipleChoice']
    print questions['answer']
    print questions['validAnswer']

image = open('image.png', 'rb')
imageread = image.read()
imageb64 = base64.encodestring(imageread)

app = Flask(__name__)
app.secret_key = os.urandom(30)
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

@app.route('/api/content', methods=['GET'])
def get_content():
    return jsonify({'content': content})
headers = {'Content-Type': 'application/json'}
@app.route('/api/question', methods=['GET'])
def get_questions():
        return jsonify({'question': tasks})
headers = {'Content-Type': 'application/json'}
@app.route('/api/image', methods=['GET'])
def get_b64Image():
    return jsonify({'image': imageb64})
app.secret_key = os.urandom(30)
headers = {'Content-Type': 'application/json'}
if __name__ == '__main__':
    app.run(debug=True)
