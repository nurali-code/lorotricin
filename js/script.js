AOS.init({
    duration: 600,
    offset: 300,
});
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
$('[data-filter]').on('click', function (e) {
    $('[data-filter]').removeClass('is_active')
    $(this).addClass('is_active')
    $('[data-content]').removeClass('is_active').hide();
    $('[data-content="' + $(this).attr('data-filter') + '"').fadeIn(300);
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