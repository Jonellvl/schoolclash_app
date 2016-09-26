/**
 * Created by yaronlambers on 26/09/16.
 */

//multiForm class form
$(document).ready(function() {
    function formBuilder(link, container) {
        $.get(link, function(data) {
            $('.form').html($('<div>', {
                id: container,
                class: container
            }));

            var parsed = JSON.parse(data);
            var jsonCount = parsed.length;
            var amount = 5;

            var form = $('<form />',
                {
                    id: 'quizQuestion'
                })
                .appendTo($('#'+container));

            for(var i = 0; i < jsonCount; i++ ){
                for(var x = 0; x < amount; x++) {
                    var key = Object.keys(parsed[i])[x];
                    if (key == "id"){
                        console.log(parsed[i].id);
                    }
                    if (key == "question"){
                        console.log(parsed[i].question);
                    }
                    if (key == "location"){
                        console.log(parsed[i].location);
                    }
                    if (parsed[i][key] == "true"){
                        var questionCount = parsed[i].answers.answer.length;
                        for (var q = 0; q < questionCount; q++) {
                            var question = parsed[i].answers.answer[q];
                            console.log(question);
                        }
                    }

                }
            }
        })
    }

    var container = 'questions';
    var link = 'js/question.json';
    formBuilder(link, container);

});



//var img = $('<img />',
//    {
//        class: divClass[x],
//        src: parsed[i][key],
//    })
//    .appendTo($('#'+container));