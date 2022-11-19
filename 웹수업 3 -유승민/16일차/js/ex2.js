$(document).ready(function(){

    /* $('#menu_wrap>li').mouseenter(function(){
        $('.sub_menu').animate({
            height:180
        }, 500);
    });

    $('#menu_wrap>li').mouseleave(function(){
        $('.sub_menu').animate({
            height:0
        }, 500);
    }); */

    $('#menu_wrap>li').hover(function(){
        $('.sub_menu').animate({
            height:180
        }, 500);
    },function(){
        $('.sub_menu').animate({
            height:0
        }, 500);
    });

    $('#section_1>.small').animate({
        left:200,
        opacity:1
    }, 700);

    $('#section_1>.big').animate({
        left:200,
        opacity:0.2
    }, 700);

    $('#section_1>p').animate({
        left:200,
        opacity:1
    }, 700);
    
    $('#container>h1').animate({
        left:0,
        opacity:1
    }, 700);

    $('#container>p').animate({
        left:0,
        opacity:1
    }, 700);

    $('#container>.btn').animate({
        left:0,
        opacity:1
    }, 700);

});