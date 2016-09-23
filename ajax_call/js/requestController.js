$(document).ready(function(){

    var list = [];
    var content = "js/content.json";

    function unpack(link){
        // Items is array

        $.get(link, function(data) {
            var parsed = JSON.parse(data);
            var countJson = parsed.length;
            //console.log(countJson);
            for (var i = 0; i < countJson; i++ ){


                for (i in parsed){

                    var keyOne = Object.keys(parsed[i])[0];//Titles
                    var keyTwo = Object.keys(parsed[i])[1];//Titles
                    var keyTree = Object.keys(parsed[i])[2];//img

                    console.log( parsed[i][keyOne] + parsed[i][keyTwo] + parsed[i][keyTree])
                }

            }
        });
    }


    unpack(content);

});