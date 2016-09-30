//function fade_in() {
//    $('body').fadeIn(200);
//    //setTimeout(function(){
//    //    $('body').css("background-color", "#fff");
//        $('body').css("transition", "200ms");
//    //}, 500);
//
//
//}
//
//function fade(){
//    $('header').css("opacity", "1");
//    $('#location-blocks').css("opacity", "1");
//    $('.container').css("opacity", "1");
//    $('.header').css("opacity", "1");
//}

function fade_in(){}

//function fade_in(){
//    $('body').fadeIn(200);
//    setTimeout(function(){
//        $('body').css("transition", "200ms");
//    }, 500);
//}

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();

        console.log(scroll);
    // Do something
    if (scroll > 60){
        $('#header-static').css({
        	position: 'fixed',
        	height: '60px',
        	overflow: 'hidden'
        });

 		$('#headerPlaceholder').css({
 			display: 'block'
 		});
    } else {
    	$('#header-static').css({
        	position: 'static',
        	height: 'auto'
        });

		$('#headerPlaceholder').css({
 			display: 'none'
 		});
    }
});