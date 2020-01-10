$(function(){
    $('.hamburger__menu').on('click', function(e){
        $(this).toggleClass('active');
        $(this).find('.menu').toggleClass('active');
    });

    var swiper1 = new Swiper('.banner', {
        centeredSlides: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });
    var swiper2 = new Swiper('.weeklyBest__right', {
        slidesPerView: 4,
        slidesPerGroup: 4,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.weeklyBest_num',
            type: 'fraction',
        },
      navigation: {
        nextEl: '.weeklyBest-next',
        prevEl: '.weeklyBest-prev',
      },
    });
    var swiper3 = new Swiper('.newArrivals__right', {
        slidesPerView: 4,
        slidesPerGroup: 4,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.newArrivals_num',
            type: 'fraction',
        },
      navigation: {
        nextEl: '.newArrivals-next',
        prevEl: '.newArrivals-prev',
      },
    });
    
    
main_visual();
// Main visual
function main_visual(){
     var swiper4 = new Swiper('.newBrand__con', {
        speed:1500,
        loop: true,
        autoplay: {
            disableOnInteraction: false,
        },
      navigation: {
        nextEl: '.newBrand-btn__next',
        prevEl: '.newBrand-btn__prev',
      }
    });
    var swiper5 = new Swiper('.newBrand-subBanner__con', {
        loop: true,
        direction: 'vertical'
    });
    var swiper6 = new Swiper('.newBrand-text__con', {
        loop: true,
        direction: 'vertical'
    });

	swiper4.controller.control = [swiper5,swiper6];
}

    function textAnimateA() {
        var slideTextA = $('.a');
      slideTextA.each(function (i) {
          setTimeout(function () {
              slideTextA.eq(i).addClass('is-visible');
          }, i*200);
      });
    }
    function textAnimateB() {
        var slideTextB = $('.b');
      slideTextB.each(function (i) {
          setTimeout(function () {
              slideTextB.eq(i).addClass('is-visible');
          }, i*200 );
      });
    }
    textAnimateA();
     setTimeout(function(){
         textAnimateB();
     },3000);
    
    //hear toggle
    var heart = $(".product__heart");
      heart.click(function(){
       $(this).toggleClass("active"); 
  });
    
//style feed
    $('.style__list').on({
            mouseenter:function(){
                var brs = $(this).siblings();
                if($(this).hasClass('on') == true){
                    $(this).addClass("on");
                }else{
                    $(this).addClass("on");
                    brs.removeClass('on')
                }
            }
        });
    
});