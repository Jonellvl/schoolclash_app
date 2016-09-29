/**
 * Created by yaronlambers on 26/09/16.
 */

//multiForm class form
function formBuilder(link, container, formId) {
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
                id: formId
            })
            .appendTo($('#'+container));

        for(var i = 0; i < jsonCount; i++ ){
            for(var x = 0; x < amount; x++) {
                var key = Object.keys(parsed[i])[x];
                if (key == "id"){
                    console.log(parsed[i].id);
                }
                if (key == "question"){
                    $( "#"+container ).append( "<h2>"+parsed[i].question+"</h2>" );
                }
                if (key == "location"){
                    $( "#"+container ).append( "<p>"+parsed[i].location+"</p>" );
                }
                if (parsed[i][key] == "true"){
                    var questionCount = parsed[i].answers.answer.length;
                    $( "#"+formId ).append( "<div class='" + i + "' >" );
                    for (var q = 0; q < questionCount; q++) {
                        var question = parsed[i].answers.answer[q];
                        $('div.' + i).append('<input type="radio" value="' + question + '">' + question + '</input>' + '<br />' );
                        console.log(question);
                    }
                    $( "#"+formId).append( "</div>" );
                }
            }
        }
    })
}



