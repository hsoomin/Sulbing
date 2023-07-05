//app-btn toggle
const appBtn=$('.app-btn');
const bg=$('.mob-bg')
const mobContent=$('.mob-content')
appBtn.on({click:function (){
    $('.bar').addClass('active');
    mobContent.animate({right:0},700)
    bg.addClass('add-app-btn');

}})
bg.on({click:function (){
    $('.bar').removeClass('active');
    mobContent.removeClass('active')
    bg.removeClass('add-app-btn');
    mobContent.animate({right:'-70%'},700)
}})

//mob-nav toggle
const menu = $('.mob-depth1');
menu.click(function(){
    $(this).next('.mob-depth2').toggleClass('on')
})


//메인 슬라이드 스와이퍼
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
}
});



//main_menu_hot 슬라이드
$('.owl-carousel').owlCarousel({
    items: 2,
    loop: true,
    margin: 10,
    nav: true,
    navText: ["", ""], 
    dots: true, 
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
}) 