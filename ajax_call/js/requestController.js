$(document).ready(function(){

    var list = [];
    function unpack(link){
        $.get(link, function(data) {
            var parsed = JSON.parse(data)
            var countJson = parsed.length;

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

    document.write(unpack("js/content.json"));

});