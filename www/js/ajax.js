// Kijkt of de bestanden al gedownload zijn
function filesDownloaded(){

}

function downloadFiles(){
    console.log(1);
    // Maak GET reqeust naar api
    var feedurl = "http://api.schoolclash.eu:5000/api/location?callback=callback";
    $.ajax({
        url: feedurl,
        dataType: 'JSONP',
        jsonpCallback: 'callback',
        type: 'GET',
        timeout:0,
        success: function (data) {
            console.log(2);

            console.log(data);

            // Zet JSON om naar string 
            var localData = JSON.stringify(data);

            // Sla het op in de lokale storage
            window.localStorage.setItem('questions', localData);
         $('#content-index').html("\
                       <div class='idText'>\
           Vul hieronder de ID<br>in die je hebt gekregen.\
           </div>\
           <div class='inputvelden'>  </div>\
           <div class='inputvelden'>\
             <input class='key' type='number' name='name' placeholder='Groep ID'>\
             <a href='map.html'><input class='submit' type='submit' value='Meedoen'></a>\
          </div>");
        },
        error: function(){
            console.log(3);
        }
    });
}


// function downloadFiles(){

//  window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(dir) {
//         console.log("got main dir",dir);
//         dir.getFile("js/json/content.json", {create:true}, function(file) {
//             console.log("got the file", file);
//             logOb = file;
//             writeLog("App started");          
//         });
//     });	
// }

function writeLog(str) {
    if(!logOb) return;
    var log = str + " [" + (new Date()) + "]\n";
    console.log("going to log "+log);
    logOb.createWriter(function(fileWriter) {
        
        fileWriter.seek(fileWriter.length);
        
        var blob = new Blob([log], {type:'text/plain'});
        fileWriter.write(blob);
        console.log("ok, in theory i worked");
    }, fail);
}