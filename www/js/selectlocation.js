function getLocations(){
	var feedurl = "http://api.schoolclash.eu:5000/api/location";
	console.log(1);

	 jQuery.ajax({
            type: "GET",
            url: feedurl,
            dataType: 'json',
            data: 'data',
            success: function(data) {
                object = data;
                console.log(2);
            } 
        });
}