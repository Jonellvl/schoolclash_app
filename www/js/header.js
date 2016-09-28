/**
 * Created by yaronlambers on 28/09/16.
 */
$( document ).ready(function(){

    var $head = $("head");
    var $headlinklast = $head.find("link[rel='stylesheet']:last");
    var linkElement = "<link rel='stylesheet' href='/css/masterBlaster.css' type='text/css' media='screen'>";
    if ($headlinklast.length){
        $headlinklast.after(linkElement);
    }
    else {
        $head.append(linkElement);
    }

});


