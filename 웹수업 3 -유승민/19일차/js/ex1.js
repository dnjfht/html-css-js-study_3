$(document).ready(function(){
    
    var ww = $(window).width();
    var wh = $(window).height();

    $('section').css({
        width: ww,
        height: wh
    });

    $('section>h1').animate({
        top:0,
        opacity:1
    }, 500);

    $('section>p').animate({
        left:0,
        opacity:1
    }, 700);

});