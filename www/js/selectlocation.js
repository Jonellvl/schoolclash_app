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
	    }
	});
}