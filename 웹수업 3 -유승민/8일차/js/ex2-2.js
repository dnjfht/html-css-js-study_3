$(document).ready(function(){

    //menu animate
    $('#menu_wrap').hover(function(){
        $('.sub_menu').stop().animate({
            height: 150
        });
    }, function(){
        $('.sub_menu').stop().animate({
            height:0
        });
    });

    /* .stop() : 여러 번 클릭해도 행동이 끝날 때까지 한 번만 작동하도록 */


    //section_1 animate
    $('#section_1 h2').animate({
        top: 0,
        opacity: 1
    },600);

    $('#section_1 p').delay(200).animate({
        top: 0,
        opacity: 1
    },400);

    $('#section_1 h1').delay(200).animate({
        left:0,
        opacity: 1
    },800);

    //section_2 animate
    $('#section_2').mouseenter(function(){
        
        $('#section_2 h2').animate({
            top: 0,
            opacity: 1
        },600);

        $('#section_2 p').delay(300).animate({
            top: 0,
            opacity: 1
        },600);

        $('#btn').delay(350).animate({
            top: 0,
            opacity: 1
        },600);

    });


});//end