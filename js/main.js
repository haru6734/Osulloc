$(document).ready(function () {

    const mb = new Swiper(".mb", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
        navigation:
        {
            nextEl: ".swiper-button-next", //다음버튼
            prevEl: ".swiper-button-prev", //이전버튼
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction", //버튼 종류 설정 'bullets', 'fraction', etc
            clickable: true, //버튼 클릭 여부
        },
    });

    $(".play").hide();

    // .pause를 클릭했을 때 
    // mb슬라이드의 자동재생 (autoplay)을 멈추어라(stop)
    $(".pause").click(function () {
        mb.autoplay.stop();
        $(".pause").hide();
        $(".play").show();
    });

    $(".play").click(function () {
        mb.autoplay.start();
        $(".pause").show();
        $(".play").hide();
    });


    //news
    const news = new Swiper(".news", {
        direction: "vertical",
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
    });


    //prd
    const prd_list = new Swiper(".prd_list", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
        slidesPerView: "1.5",
        spaceBetween: 20,
        breakpoints: {
            768: {
                slidesPerView: "3",
                spaceBetween: 20,
            },
            1400: {
                slidesPerView: "5",
                spaceBetween: 50,
            },
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            dragSize: 200,
            draggable: true,
        },

    });

    $(".prd_list ul li a img:nth-child(2)").hide();
    $(".prd_list li").hover(function () {
        $(this).find("img:nth-child(2)").stop().fadeToggle();
    });


    //teaware
    // .tab_btn li 1,2,3,4를 클릭했을 때 
    // .tab_img li 1,2,3,4를 보여라 ( 형제들은 숨겨라 )

    /*     $(".tab_img li:not(:first-child)").hide();
        $(".tab_btn li:nth-child(1)").click(function () {
            $(this).addClass("on").siblings().removeClass("on");
            $(".tab_img li:nth-child(1)").fadeIn().siblings().fadeOut();
        });
    
        $(".tab_btn li:nth-child(2)").click(function () {
            $(this).addClass("on").siblings().removeClass("on");
            $(".tab_img li:nth-child(2)").fadeIn().siblings().fadeOut();
        });
    
        $(".tab_btn li:nth-child(3)").click(function () {
            $(this).addClass("on").siblings().removeClass("on");
            $(".tab_img li:nth-child(3)").fadeIn().siblings().fadeOut();
        });
    
        $(".tab_btn li:nth-child(4)").click(function () {
            $(this).addClass("on").siblings().removeClass("on");
            $(".tab_img li:nth-child(4)").fadeIn().siblings().fadeOut();
        }); */

    // .tab_btn li 클릭한 요소 번호 찾기
    $(".tab_btn li").click(function () {
        let idx = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".tab_img li").eq(idx).fadeIn().siblings().fadeOut();
    });


});


