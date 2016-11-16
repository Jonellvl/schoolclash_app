function downloadFiles(page){
   
    // Maak GET reqeust naar api
    var feedurl = "http://api.schoolclash.eu:5000/api/location?callback=callback";
    $.ajax({
        url: feedurl,
        dataType: 'JSONP',
        jsonpCallback: 'callback',
        type: 'GET',
        timeout:0, 
        async: false,
        success: function (data) {
           
            // Zet JSON om naar string 
            var localData = JSON.stringify(data);
            
            // Sla het op in de lokale storage
            window.localStorage.setItem('questions', localData);
         $('#content-index').html("\
                       <div class='idText'>\
           Please fill in your<br>group id.\
           </div>\
           <div class='inputvelden'>\
             <input class='key' type='number' name='name' placeholder='Groep ID'>\
             <div class='start-link'><input class='submit' type='submit' value='Start playing'><div class='start-link'>\
          </div>");

            if (page == "selectlocation") {
              // fetchLocations();
              location.reload();
            };
        },
        error: function(){
            $('#content-index').html("<div class='idText'>\
           Error!<br>Something went wrong while downloading.</div>\
           <div class='inputvelden'>\
            <input class='submit' type='button' id='download' value='Download data'>\
          </div>");
            if (page == "selectlocation") {
              $("#location-blocks").html("<div class='downloading-text'><h3> Error! </h3><br> Something went wrong while downloading the data</div>");
            $("#refresh img").addClass('spin');
            }
            
        }
    });
}

