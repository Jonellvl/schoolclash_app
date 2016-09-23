$(document).ready(function(){

    var content = "js/content.json";

    function unpackContent(link, divId){ // amount is how many items in one json block
        $.get(link, function(data) {
            var parsed = JSON.parse(data);
            var jsonCount = parsed.length;
            var amount = divId.length;

            for(var i = 0; i < jsonCount; i++ ){

                for(var x = 0; x < amount; x++){
                    var key = Object.keys(parsed[i])[x];
                    var keyTwo = Object.keys(parsed[0])[0];

                    $("<div class='"+divId[x]+"'/>").html(parsed[i][key]).appendTo("#content");
                }
            }

        });
    }

    var arr = ["title", "content", "img"];
    unpackContent(content, arr)

});