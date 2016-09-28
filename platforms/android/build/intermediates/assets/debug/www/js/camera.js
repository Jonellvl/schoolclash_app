// var type = window.PERSISTENT;
// var size = 5*1024*1024;
// //
// window.requestFileSystem(type, size, successCallback, errorCallback)
//
// function successCallback(fs) {
//   alert('jo');
//   dirnames = ["SchoolClashTour",
//         "SchoolClashTour/images" ]
//
//   for (var i = 0; i < dirnames.length; i++) {
//     makeDirectory(dirnames[i])
//   }
//
//   function makeDirectory(dirname){
//         fs.root.getDirectory(dirname, {create: true, exclusive: true}, function(fileEntry) {
//         }, errorCallback);
//     }
// }
//
//  function errorCallback(error) {
//     // files already exist
//  }

//options for camera, for more options: http://cordova.apache.org/docs/en/latest/reference/cordova-plugin-camera/index.html
var cameraOptions = {
  quality: 50,
  allowEdit: false,
  targetWidth: 400,
  targetHeight: 400,
  destinationType: Camera.DestinationType.FILE_URI,
  saveToPhotoAlbum: false
};

function onSuccess(imageURI) {
  //handle inside this function what you want to do with the picture that is made
  var image = document.getElementById('myImage');
  image.src = imageURI;
}

function onFail(message) {
  alert('Failed because: ' + message);
}

//actual call of the camera
function cameraBtn(){
  navigator.camera.getPicture(onSuccess, onFail, cameraOptions);
}
