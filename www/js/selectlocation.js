function getLocations(){
	var feedurl = "http://api.schoolclash.eu:5000/api/location";
	console.log(1);

	$.ajax({
	    url: "locations.json",
	    dataType: 'JSONP',
	    jsonpCallback: 'callback',
	    type: 'GET',
	    success: function (data) {
	        console.log(data);

	        console.log(data["lat"]);
	        $("body").append("\
	        	<div class='location-block'>\
					<img src='data:image/jpeg;base64, " + data["img"] + "' />\
					<div class='content'>\
	        			<h1>" + data["title"] + "</h1>\
	        		</div>\
	        	</div>");
	    }
	});
}