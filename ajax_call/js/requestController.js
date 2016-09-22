/**
 * Created by yaronlambers on 22/09/16.
 */

$(document).ready(function(){

    var list = [];
    function unpack(link){
        $.get(link, function(data) {
            parsed = JSON.parse(data)
            countJson = parsed.length;

            for (var i = 0; i < countJson; i++ ){
                list.push(
                    parsed[i].title,
                    parsed[i].content,
                    parsed[i].img
                );
            }
            console.log(list);

            return list;
        });
    }

    console.log(unpack("js/content.json"));

    function transferToHtml(content){
        var array = content;
        console.log(content + " array");
        var newHTML = [];

        $.each(array, function(index, value) {
            newHTML.push('<span>' + value + '</span>');
        });

        $(".element").html(newHTML.join(""));
    }

});