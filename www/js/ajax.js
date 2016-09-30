function downloadFiles(){
   
    // Maak GET reqeust naar api
    var feedurl = "http://api.schoolclash.eu:5000/api/location?callback=callback";
    $.ajax({
        url: feedurl,
        dataType: 'JSONP',
        jsonpCallback: 'callback',
        type: 'GET',
        timeout:0,
        success: function (data) {
           
            // Zet JSON om naar string 
            var localData = JSON.stringify(data);
            
            // Sla het op in de lokale storage
            window.localStorage.setItem('questions', localData);
         $('#content-index').html("\
                       <div class='idText'>\
           Please fill in your<br>group id.\
           </div>\
           <div class='inputvelden'>  </div>\
           <div class='inputvelden'>\
             <input class='key' type='number' name='name' placeholder='Groep ID'>\
             <a href='map.html'><input class='submit' type='submit' value='Meedoen'></a>\
          </div>");
        },
        error: function(){
            $('#content-index').html("<div class='idText'>\
           Error!<br>Something went wrong while downloading.</div>\
           <div class='inputvelden'>\
            <input class='submit' type='button' id='download' value='Download vragen'>\
          </div>");
        }
    });
}

