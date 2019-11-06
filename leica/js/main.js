$(function(){
    
    var swiper = new Swiper('.swiper-container', {
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    
    $('.swiper-button-prev,.swiper-button-next').on('click',function(e){
        e.defaultPrevented();
    });
    
    $('.leicaStore__location').on('click',function(){
        $(this).addClass('icon');
        $(this).siblings().removeClass('icon');
        $(this).parent().siblings().children('li').removeClass('icon');
        
    });
});