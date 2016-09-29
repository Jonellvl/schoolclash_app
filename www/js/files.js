// 1. Event listener toevoegen
$(document).ready(function(){
	document.addEventListener('deviceready', deviceReady);
});

// 2. Implementatie
function deviceReady(){
  alert('this is deviceready')
	var type = window.PERSISTENT;
	var size = 5*1024*1024;

	window.requestFileSystem(type, size, successCallback, errorCallback)

	function successCallback(fs) {

		dirnames = ["SchoolClashTour",
					"SchoolClashTour/images"]

		for (var i = 0; i < dirnames.length; i++) {
			makeDirectory(dirnames[i])
		}

		function makeDirectory(dirname){
      alert('succes')
      		fs.root.getDirectory(dirname, {create: true, exclusive: true}, function(fileEntry) {
      		}, errorCallback);
   		}
	}

   function errorCallback(error) {
     alert('this is not working (yet)')
      // files already exist
   }


}
