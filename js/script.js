// app-btn toggle
const appBtn=$('.appbarBt');
const bg=$('.mob-bg');
const mobContent=$('.mob-gnb .mob-content');

appBtn.on({click: function() {
    $('.bar').addClass('active');
    bg.addClass('on');
    mobContent.addClass('active');
    }
});

bg.on({click: function() {
    $('.bar').removeClass('active');
    mobContent.removeClass('active');
    bg.removeClass('on');
    }
});


//mob-nav depth toggle
const menu = $('.mob-depth1');
menu.click(function(){
    $(this).next('.mob-depth2').toggleClass('on')
})


//메인 슬라이드
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    });



//best menu 슬라이드
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:30,
    nav:true,
    navText:['',''], 
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        680:{
            items:2,
            nav:false
        },
        768:{
            items:3,
            nav:false
        },
        1100:{
            items:4,
            nav:true,
            loop:true
        }
    }    
});

//////플로팅메뉴
