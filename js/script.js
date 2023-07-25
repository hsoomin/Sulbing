// app-btn toggle
const appBar = document.querySelector('.header-appBar');
const mobCont = document.querySelector('.mob-content');
const mobBg = document.querySelector('.mob-bg');


appBar.addEventListener('click',function(){
    mobCont.classList.add('active');
    mobBg.classList.add('on');
});


mobBg.addEventListener('click',function(){
    mobCont.classList.remove('active');
    mobBg.classList.remove('on');
});


const mobDepth1Items = document.querySelectorAll('.mob-depth1');

mobDepth1Items.forEach(function(item) {
  item.addEventListener('click', function() {
    const mobDepth2 = this.querySelector('.mob-depth2');
    mobDepth2.classList.toggle('on');
  });
});


//main banner
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

//quick-memu
const quickMenu = document.querySelector('.quick-menu');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');
const section4 = document.querySelector('#section4');
const section5 = document.querySelector('#section5');

window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= section2.offsetTop && scrollPosition < section5.offsetTop + section5.offsetHeight) {
        quickMenu.style.display = 'block';
    } else {
        quickMenu.style.display = 'none';
    }
});

