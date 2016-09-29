//options for camera, for more options: http://cordova.apache.org/docs/en/latest/reference/cordova-plugin-camera/index.html
var cameraOptions = {
  quality: 50,
  allowEdit: false,
  targetWidth: 400,
  targetHeight: 400,
  destinationType: Camera.DestinationType.FILE_URI,
  saveToPhotoAlbum: true
};

function onSuccess(imageURI) {
  //handle inside this function what you want to do with the picture that is made
}

function onFail(message) {
  alert('Failed because: ' + message);
}

//actual call of the camera
function cameraBtn(){
  navigator.camera.getPicture(onSuccess, onFail, cameraOptions);
}