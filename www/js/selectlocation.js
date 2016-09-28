function getLocations(){
	var url = "http://api.schoolclash.eu:5000/api/location";
	console.log(1);
	
	$.getJSON(url, function(data) {
	  alert(data);
	  console.log(2);
	});
}