/**
 * Created by yaronlambers on 28/09/16.
 */
function header(cssLink){

    var css = "css/"+cssLink;
    console.log(css);

    var head = $("head");
    var headlinklast = head.find("link[rel='stylesheet']:last");
    var linkElement = "<link rel='stylesheet' href='/css/fietsen.css' type='text/css' media='screen'>";
    //var linkElement = "<link rel='stylesheet' href='/css/fietsen.css' type='text/css' media='screen'>";
    if ($headlinklast.length){
        $headlinklast.after(linkElement);
    }
    else {
        $head.append(linkElement);
    }
}




