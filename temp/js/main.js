function animationFirst () {
    $('.second-title').addClass('slideDown');
    setTimeout(function(){
       $('.second-title').addClass('rotate');
        $('.first-title-block').addClass('slideLeft')
    }, 2000);
}
function animationSecond () {
    $('.third-title').addClass('slideRight');
    $('.header-img').addClass('slideRight');
    setTimeout(function(){
        $('.fours-title').addClass('slideLeft')
    }, 2000);
}
function animationThird () {
    $('.last-title').addClass('slideDown');
}
$(document).ready(function () {
    animationFirst();
    setTimeout(animationSecond, 4000);
    setTimeout(animationThird, 8000);
    $("a.topLink").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
});