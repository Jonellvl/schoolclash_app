// Kijkt of de bestanden al gedownload zijn
function filesDownloaded(){

    // Lege var voor de db instantie
    var db = null;

    // Open database
    document.addEventListener('deviceready', function() {
      db = window.sqlitePlugin.openDatabase({name: 'database.db', location: 'default'});

                console.log(3);
    
    // Kijk of de table Questions bestaat
     db.executeSql("select DISTINCT tbl_name from sqlite_master where tbl_name = 'questions'", [], function(result) {  
           if(result.rows.length > 0 ){
                return true;
                console.log(1);
           }else{
                return false;

                console.log(2);
           }
        });
    });
}

function downloadFiles(){
    var db = null;

    // Open database
    document.addEventListener('deviceready', function() {
      db = window.sqlitePlugin.openDatabase({name: 'database.db', location: 'default'});
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