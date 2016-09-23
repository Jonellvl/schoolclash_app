$(document).ready(function(){

    var list = [];
    var content = "js/content.json";

    function unpack(link, amount){
        // Items is array

        $.get(link, function(data) {
            var parsed = JSON.parse(data);
            var jsonCount = parsed.length;

            for (var i = 0; i < jsonCount; i++ ){

                for (var x = 0; x < amount; x++){
                    var key = Object.keys(parsed[i])[x];
                    console.log(parsed[i][key]);
                }
            }
        });
    }


    unpack(content, "3");

});