$(function(){
    var $logo = $('.logo-mobile-wrap');
    var $content = $('.logo-mobile-content');
    $logo.on('click',function(){
        if($('.logo-mobile-content').css('display')=='none'){
            $content.slideDown();
            $("body").css("overflow","hidden");
            $('.logo-mobile').css({
                'color':'rgb(255, 90, 95)',
                'transition':'color .25s ease'
            });
            $('.logo-arrow svg').css({
                'color':'#727272',
                'transform':'rotate(180deg)',
                'transition':'all .25s ease-in-out'
            });
            resize();
        }else{
            $content.slideUp(); 
            $("body").css("overflow","auto");
            $('.logo-mobile').css({
                'color':'#fff',
                'transition':'color .25s ease'
            });
            $('.logo-arrow svg').css({
                'color':'#fff',
                'transform':'rotate(0deg)',
                'transition':'all .25s ease-in-out'
            });
        }
    });
    function resize(){
        $(window).resize(function(){
            if($(this).width()>1127){
                $content.slideUp();
                $("body").css("overflow","auto");
            $('.logo-mobile').css({
                'color':'#fff',
                'transition':'color .25s ease'
            });
            $('.logo-arrow svg').css({
                'color':'#fff',
                'transform':'rotate(0deg)',
                'transition':'all .25s ease-in-out'
            });
            }
        });
    }
    /*메인 폼*/
    
    /*오른쪽하단 버튼 푸터*/
    $('.tab').hide();
    $(window).scroll(function () {
            if ($(this).scrollTop() > 250) {
                $('.tab').show();
            }
        });
    
    $('.tab').click(function(){
        $('.footer-wrap').show();
    });
    $('.close-btn').click(function(){
        $('.footer-wrap').hide();
    });
    
    /*폼태그 이동*/
    var $form = $('.form'),
        $bg = $('.bg'),
        $bookWrap = $('.book-wrap'),
        $mainPage = $('.main-page'),
        $bookForm = $('.bookForm');
     if($(this).width()<729){
            $mainPage.append($form);
            $form.appendTo($mainPage);
            $bookWrap.append($bg);
            $bg.appendTo($bookWrap);
            
        }
    $(window).resize(function(){
        if($(this).width()<729){
            $mainPage.append($form);
            $form.appendTo($mainPage);
            $bookWrap.append($bg);
            $bg.appendTo($bookWrap);
            
        }else{
            $bookForm.append($form);
            $form.appendTo($bookForm);
            $mainPage.append($bg);
            $bg.appendTo($mainPage);
        }
    });

    
    /*팝업*/
    $(".loinpopUp").click(function(e){
        e.preventDefault();
        $(".popUp-wrap.loginmenu").css("display","block");
        
        $("body").css("overflow","hidden");        
    });
    $(".joinpopUp").click(function(e){
        e.preventDefault();
        $(".popUp-wrap.joinmenu").css("display","block");
        $("body").css("overflow","hidden");        
    });
    $(".popUp-close-btn button").click(function(){
        $(".popUp-wrap").css("display","none");
        $("body").css("overflow","auto");
    });
    $(".popUp-back").click(function(e){
        if(!$(".popUp").has(e.target).length){
            $(".popUp-wrap").css("display","none");
            $("body").css("overflow","auto");
        }
    });
    
    /*목적지*/
    $(this).click(function(e){
        /*var tt = $(e.target).attr('class');*/
        if(!$(e.target).hasClass('desti-input')){
            $('.desti-input').css({'border-color':'#ebebeb'});
            $('.destination-box').css({'display':'none'});
        }
        else{
            $('.desti-input').css({'border-color':'#008489'});
            $('.destination-box').css({'display':'block'});
        }
    });
    
        /*인원*/
    /*$(this).click(function(e){
        if(!$(e.target).is('.guest-input, .spiner')){
             $('.guest-input').css({'border-color':'#ebebeb'});
            $('.guest-box').css({'display':'none'});
        }
        else{
            $('.guest-input').css({'border-color':'#008489'});
            $('.guest-box').css({'display':'block'});
            
        }
    });*/
    $(".guest-input").click(function(){
        $(".guest-box").css("display","block");
        $('.one').css('display','none');
        $('.two').css('display','block');
    });
    $(document).mouseup(function (e){
        var container = $(".guest-box");
        if( container.has(e.target).length === 0){
            container.css({'display':'none'});
            }
        $('.one').css('display','block');
        $('.two').css('display','none');
    });
    
    var $wrap = $('.guest'),
        $btnMinus = $wrap.find('.minus-btn'),
        $btnPlus = $wrap.find('.plus-btn');
    
    $btnMinus.on('click', function(){
        var $this = $(this);
        var count = $this.parent().find('.valueCount').text();
        $('#hh').fadeIn().fadeOut();
        if(count>=1){
            count--;
        }
        $this.parent().find('.valueCount').text(count);
        
        valueCheck();
        $('.adult .valueCount').text(adult);

        if(count<=0){
            $this.parent().find('.spiner-btn-minus').removeClass('on');
            if(adult>0){
                $('.adult .spiner-btn-minus').addClass('on');
            }
        }
    });
    
    $btnPlus.on('click', function(){
        var $this = $(this);
        var count = $this.parent().find('.valueCount').text();
        if(count >=0){
            count ++;
        }
        $this.parent().find('.valueCount').text(count);
        
        valueCheck();
        $('.adult .valueCount').text(adult);
    });
    
   
    
    function valueCheck(){
        adult = $('.adult .valueCount').text();
        child = $('.child .valueCount').text();
        baby = $('.baby .valueCount').text();
        var $guestInput = $('.guest-input');
        
        if(child>adult || baby>adult){
            if(adult < 1){
                adult++;
                $('.adult .spiner-btn-minus').addClass('on');
            }
        }
        guest = Number(adult) + Number(child);
        
        if(adult>0){
                $('.adult .spiner-btn-minus').addClass('on');
                if(adult>=16){
                    $('.adult .spiner-btn-plus').removeAttr('disabled').addClass('on');
                    $('.child .spiner-btn-plus').attr('disabled','disabled').removeClass('on');
                }else{
                    $('.adult .spiner-btn-plus').removeAttr('disabled').addClass('on');
                    $('.child .spiner-btn-plus').removeAttr('disabled').addClass('on');
                }
            }
        if(guest >= 16){
            $('.adult .spiner-btn-plus').attr('disabled','disabled').removeClass('on');
            $('.child .spiner-btn-plus').attr('disabled','disabled').removeClass('on');
            
        }else{
            if(child > 0){
                $('.child .spiner-btn-minus').addClass('on');
                if(child >=5){
                    $('.adult .spiner-btn-plus').removeAttr('disabled').addClass('on');
                    $('.child .spiner-btn-plus').attr('disabled','disabled').removeClass('on');
                    }else{
                    $('.adult .spiner-btn-plus').removeAttr('disabled').addClass('on');
                    $('.child .spiner-btn-plus').removeAttr('disabled').addClass('on');
                }
            }
        }
        
        if(baby>0){
            $('.baby .spiner-btn-minus').addClass('on');
            if(baby>=5){
                $('.baby .spiner-btn-plus').attr('disabled','disabled').removeClass('on');
            }else{
                $('.baby .spiner-btn-plus').removeAttr('disabled').addClass('on');
            }
        }
        /*인풋 텍스트*/
        if(baby>0){
            var babyCountText = '게스트'+guest+'명, ' + '유아'+baby+'명';
     $guestInput.val(babyCountText).css({'color':'#484848'});
        }if(baby ==0){
            var guestCountText = '게스트'+guest+'명';
    $guestInput.val(guestCountText).css({'color':'#484848'});
            if(guest==0){
                var CountText='인원';
    $guestInput.val(CountText).css({'color':'#727272'});
            }
        }
        
        /*삭제*/
        if(adult>0 || child >0 || baby>0){
            $('.guest-delete span').show();
        }else{
            $('.guest-delete span').hide();
        }
        $('.guest-delete span').on('click',function(){
            $(this).hide();
            $('.adult .valueCount').text(0);
            $('.child .valueCount').text(0);
            $('.baby .valueCount').text(0);
        var CountText='인원';
    $guestInput.val(CountText).css({'color':'#727272'});
        $('.spiner-btn-minus').removeClass('on');
        $('.spiner-btn-plus').addClass('on').removeAttr('disabled');
        });
        
    }
    
    
    
    
    /*달력*/
    $("#checkIn").datepicker({
        /*showAnim: "slideDown",*/
        minDate:0,
        onClose: function( selectedDate ) {
            $("#checkOut").datepicker( "option", "minDate",
                                              selectedDate);
        },
        beforeShow: function(input) {
            $('#ui-datepicker-div').css('margin-left','0');
            if($(window).width()<729){
                $('#ui-datepicker-div').css('margin-left','0');
            }
		}
    });
    $("#checkOut").datepicker({
/*        showAnim: "slideDown",*/
        minDate:0,
        onClose: function( selectedDate ) {
            $("#checkIn").datepicker( "option", "maxDate", selectedDate);
        },
        beforeShow: function(input) {
            $('#ui-datepicker-div').css('margin-left','-90px');
            if($(window).width()<729){
                $('#ui-datepicker-div').css('margin-left','-25px');
            }
		}
    });
    
    /*var win = $(window);
    win.scroll(function() {

		if ($(document).height() - win.height() == win.scrollTop()) {
                console.log('0');
                $.ajax({
                    url: "add_section.html",
                    data: "html",
                    success: function(resultText)
                    {
                        $('#loadData').append(resultText);
                        
                    },
					beforeSend:function(){
						<!--이미지 보여주기 처리-->
						$('.wrap-loading').addClass('display-none');
					}
					,complete:function(){
						<!--이미지 감추기 처리-->
						$('.wrap-loading').removeClass('display-none');
				
					},
                    error: function() {
                        alert("호출에 실패했습니다.");
                    }
                });
        }else{
            console.log('1');
        }
            
        });
*/


});




