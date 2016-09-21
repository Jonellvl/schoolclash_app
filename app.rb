require 'sinatra'
require 'mysql2'

# Connect to database
con = Mysql2::Client.new(:host => "localhost", :username => "root", :password => "", :database => "schoolclash")

# Empty array to hold the qeustions
questions = Array.new

# [
#   { 
#     :id => 1,
#     :title => "title",
#     :multipleChoice => false,
#     :date => "20-05-1999",
#			:img => "knsdkndkjsnkdjnskjndknsd3n2kjn3k2d3w"
#     },
#   { 
#     :id => 1,
#     :title => "title",
#     :multipleChoice => false,
#     :date => "20-05-1999",
#			:img => "knsdkndkjsnkdjnskjndknsd3n2kjn3k2d3w"
#     }
# ]

# Iterating over each question and putting them into the questions array
con.query('SELECT multiplechoice FROM api').each do |row|
  multipleChoice = (row["multipleChoice"] == 1) # Convert MySQL bool to ruby bool
  
  questions << {  
    :id => row["id"],
    :title => row["title"],
    :multipleChoice => multipleChoice,
    :date => row["date"],
    :img => row["img"]
	}
end

get "/" do
'{
  question:
    [
      {
        id: 1,
        multipiChoice: #{multiplechoice}[
          {
            id: 1,
            awnser: "Dit is een goed antwoord",
            validAwnser: true
          }
               
        ],
        title: "2002",
        img: "img.jpg"
      },
      {
        id: 2,
        multipiChoice: true[
          {
            id: 1,
            awnser: "Dit is een fout antwoord",
            validAwnser: false
          }
               
        ],
        title: "2007",
        img: "img2.jpg"
      }
       
    ]
}'
end