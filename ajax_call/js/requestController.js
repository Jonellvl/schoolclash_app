/**
 * Created by yaronlambers on 22/09/16.
 */
$(document).ready(function(){

    function unpack(link){

        $.get(link, function(data) {

            array =  {}
            parsed = JSON.parse(data)

            console.log(parsed[1].title)
        });

    }

    unpack("js/content.json");


});