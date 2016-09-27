//$(document).ready(function(){
    // The link is the location of the json file
    // The divclass is an array where you can deside how you name the div's
    // The container is where the contend is stored inside the html
    // Bug: cannot give a new container! :(
    // It's necessary to use standard tags for the json/ title, content, img, link

function unpackContent(link, divClass, container, location){
    $('.'+location).html($('<div>', {
        class: container
    }));

    $.get(link, function(data) {
        var parsed = JSON.parse(data);
        var jsonCount = parsed.length;
        var amount = divClass.length;
        for(var i = 0; i < jsonCount; i++ ){
            for(var x = 0; x < amount; x++){
                var key = Object.keys(parsed[i])[x];

                var inner = "inner"+i;

                if (key == "img"){
                    var img = $('<img />',
                        {
                            class: inner + " " + divClass[i],
                            src: parsed[i][key]
                        })
                        .appendTo($('.'+container));
                }else{
                    if (key == "plaats"){
                        $("<p class='" + inner +" "+ divClass[i] +"'/>").html(parsed[i][key]).appendTo($('.'+container));
                    }
                    else{
                        $("<h2 class='" + inner +" "+ divClass[i] +"'/>").html(parsed[i][key]).appendTo($('.'+container));
                    }
                }
            }
            $( "."+inner ).wrapAll( "<div class='text'></div>" );
        }
    });

}
