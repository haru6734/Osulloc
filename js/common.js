// JavaScript Document

$(document).ready(function () {


    // 팝업닫기
    $(".popup_close").click(function () {
        $(".popup").slideUp();
    });



    // 상단메뉴
    $(".depth2,.depth2_bg").hide();

    $(".gnb>li").mouseenter(function () {
        $(".depth2_bg").stop().fadeIn();
        $(this).children(".depth2").stop().fadeIn();
    });
    $(".gnb>li").mouseleave(function () {
        $(".depth2_bg").stop().fadeOut();
        $(this).children(".depth2").stop().fadeOut();
    });



    // 검색영역
    $(".search").hide();

    $(".btn_search").click(function () {
        $(".search").fadeIn();
    });
    $(".search_close").click(function () {
        $(".search").fadeOut();
    });



    // 전체메뉴
    $(".all_wrap").hide();

    $(".sitemap").click(function () {
        $(".all_wrap").fadeIn();
    });
    $(".all_close").click(function () {
        $(".all_wrap").fadeOut();
    });



    // 모바일 메뉴    
    $(".ham").click(function () {
        $(".mgnb_wrap").animate({
            left: '0'
        });
    });

    $(".mgnb_close").click(function () {
        $(".mgnb_wrap").animate({
            left: '100%'
        });
    });



    //모바일 2차메뉴
    $(".mdepth2").hide();

    $(".mgnb > li").click(function () {
        $(this).children(".mdepth2").slideDown();
        $(this).siblings().children(".mdepth2").slideUp();
    });



    // 언어설정메뉴
    $('.language ul').hide();
    $('.language').click(function () {
        $('.arrow').toggleClass('active');
        $(this).children('ul').slideToggle();
    });







}); // 문서준비이벤트 종료
