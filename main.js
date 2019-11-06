$(function(){
    $(".nav--list").hover(function () {
            $(".section").addClass("navHovered");
            }, function (e) {
            $(".section").removeClass("navHovered");
        });
    var sectionHeight = $('#section0').innerHeight();
    $('.first').innerHeight(sectionHeight);
});