function mobile () {
    return window.matchMedia('(max-width: 645px)').matches;
}
function animationFirst () {
    $('.second-title').addClass('slideDown');
    setTimeout(function(){
       $('.second-title').addClass('rotate');
        $('.first-title-block').addClass('slideLeft')
    }, 2000);
}
function animationFirstMobile () {
    $('.second-title').addClass('rotate');
    $('.second-title').addClass('slideDown');
    setTimeout(function(){
        $('.first-title-block').addClass('slideLeft')
    }, 1000);
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
function windowSize(){
    if (mobile()){
        animationFirstMobile();
        setTimeout(animationSecond, 500);
        setTimeout(animationThird, 5000)
    } else {
        animationFirst();
        setTimeout(animationSecond, 4000);
        setTimeout(animationThird, 8000)
    }
}
$(document).ready(function () {
    windowSize();
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