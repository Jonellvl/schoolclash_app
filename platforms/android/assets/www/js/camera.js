var app = app || {};

app.main = (function(){
    var init = function(){
        console.log('app init');
        attachEvents();
    };
    
    var attachEvents = function(){
        $('#btnGetCam').on('click', getCamera);
    };
    
    var getCamera = function() {
    navigator.camera.getPicture(onSuccess, onFail, { quality: 25,
        destinationType: Camera.DestinationType.DATA_URL
    });

    function onSuccess(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }
    };
    
    return {
        init: init
    }
})();