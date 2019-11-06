$(function(){
    $('.hamburger__menu').on('click', function(e){
        $(this).toggleClass('active');
        $(this).find('.menu').toggleClass('active');
    });
    
    var swiper1 = new Swiper('.banner', {
        loop:true,
        autoplay:true
    });
    var swiper2 = new Swiper('.weeklyBest .swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    }); 
    var swiper3 = new Swiper('.newArrivals .swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    });
    
    /*main-nav 효과*/
    $('.main-nav__list').on('click',function(e){
        e.preventDefault();
        $(this).find('a').addClass('dot');
        $(this).siblings().find('a').removeClass('dot');
    });
    
    /*검색창, 카테고리*/
    $('#search').on('click',function(e){
        e.preventDefault();
        $('.search').slideToggle();
        $('.mobile--frame').css({'overflow-y':'none'});
        $(body).css({'overflow-y':'none'});
    });
    
    $('#category').on('click',function(e){
        e.preventDefault();
        $('.category').slideToggle();
        $('.mobile--frame').css({'overflow-y':'none'});
        $(body).css({'overflow-y':'none'});
    });
    
    /*category-nav 효과*/
    $('.category-list').on('click',function(e){
        e.preventDefault();
        $(this).find('a').addClass('cdot');
        $(this).siblings().find('a').removeClass('cdot');
    });
    
    
    /*footer 보이기*/
    var lastScrollTop = 0,
        delta = 15;
    $('.mobile--frame').scroll(function (event) {
        var st = $(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta) return;
        if ((st > lastScrollTop) && (lastScrollTop > 0)) {
            $(".bottom__nav").addClass('nav-up');
        } else {
            $(".bottom__nav").removeClass('nav-up');
        }
        lastScrollTop = st;
    });
    
    /*footer hide info*/
    $('.hiphoper-info').on('click',function(){
        $('.hide_info').slideToggle();
    });
        
});