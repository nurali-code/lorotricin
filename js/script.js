
$('.btn_menu').on('click', function () {
    $('.nav, .btn_menu, body').toggleClass('is_active');
})
$('.nav__link').on('click', function () {
    $('.nav, .btn_menu, body').removeClass('is_active');
})


$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 80, }, 300,)
});

$('.main').slick({
    arrows: true,
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slideToScroll: 1,
    centerPadding: '0px',
    adaptiveHeight: true,
    centerMode: true,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                arrows: false,
            }
        }
    ]
});