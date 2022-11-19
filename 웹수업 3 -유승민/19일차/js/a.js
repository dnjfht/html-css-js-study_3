$(document).ready(function(){

    //top_btn
    $('#top_btn').click(function(){
        $('html').animate({
            scrollTop:0
        });
    });

    //scroll event
    $(window).scroll(function(){

        var sct = $(window).scrollTop();
        console.log(sct);

        if(sct > 160 && sct < 600) {
            $('#box_1').animate({
                top:'50%',
                opacity:1
            },1200,'easeOutQuint');
        }else if(sct >= 700) {
            $('#box_2').animate({
                top:'50%',
                opacity:1
            },500);
            $('#box_3').delay(200).animate({
                top:'50%',
                opacity:1
            },500);
        }

    });// scroll end

    /* * 가속도
    => 가속도 플러그인 사용(jquery.easing)
    => 가속도 들어가는 명령어 뒤에 가속도 명 붙여줌
    => 가속도 명은 'jquery easing 차트시트' 검색 후에 원하는 움직임 찾아서 적용시켜줌 */

    

});