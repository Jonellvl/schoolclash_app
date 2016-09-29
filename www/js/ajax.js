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

