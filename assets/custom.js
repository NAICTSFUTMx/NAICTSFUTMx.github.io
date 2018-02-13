$(document).ready(() => {
    $('.nav-close').click(function() {
        $('body').removeClass('nav-opened');
    });

    $('.menu-btn').click(function() {
        $('body').addClass('nav-opened');
    });

    /**********************/
    /*	Department carousel   */
    /**********************/
    $('.carousel-depts').bxSlider({
        auto: true,
        slideWidth: 234,
        minSlides: 2,
        maxSlides: 5,
        controls: false
    });
})