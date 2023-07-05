//app-btn toggle
const appBtn=$('.appbarBt');
appBtn.on({click:function (){
    $('.bar').toggleClass('active');
}})




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
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }    
});

    