$(function(){
    $(".nav--list").hover(function () {
            $(".section").addClass("navHovered");
            }, function (e) {
            $(".section").removeClass("navHovered");
        });
    var sectionHeight = $('#section0').innerHeight();
    var sectionWidth = $('#section0').innerWidth();
    $('.first').innerHeight(sectionHeight);    
    $('.work-swip-list.swiper-slide').innerHeight(sectionHeight);    
});