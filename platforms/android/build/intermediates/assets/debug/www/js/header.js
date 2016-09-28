/**
 * Created by yaronlambers on 28/09/16.
 */
function header(cssLink){
    var countCss = cssLink.length;
    for (var i = 0; i < countCss; i++){
        var head = $("head");
        var headlinklast = head.find("link[rel='stylesheet']:last");
        var linkElement = "<link rel='stylesheet' href='" +  cssLink[i] +"' type='text/css' media='screen'>";
        if (headlinklast.length){
            headlinklast.after(linkElement);
        }
        else {
            head.append(linkElement);
        }
    }
}




