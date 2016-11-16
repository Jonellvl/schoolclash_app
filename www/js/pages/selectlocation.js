function getLocations(){
	var feedurl = "http://api.schoolclash.eu:5000/api/location";
	console.log(1);

	$.ajax({
	    url: feedurl,
	    dataType: 'JSONP',
	    jsonpCallback: 'callback',
	    type: 'GET',
	    success: function (data) {
	        console.log(data);
	        data = data["content"];

	        $("body").append("\
	        	<a href='showQeustion.html?id=" + data["id"] + "' class='location-block'>\
					<div class='image'><img src='data:image/jpeg;base64, " + data["image"] + "' /></div>\
					<div class='content'>\
	        			<h3>" + data["title"] + "</h3>\
	        		</div>\
	        	</div>");
	    }
	});
}