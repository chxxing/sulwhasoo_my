$(function () {
    $('.mainSlider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    })

    $('.mainSlider').on('init afterChange', function (e, s, c) {
        let current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.mainArrow i').removeClass('on');
        if (c === 1) {
            $('.mainArrow i').addClass('on')
        }
    })

    $('.mainArrow i:nth-child(1)').on('click', function () {
        $('.mainSlider').slick('slickPrev')
    })

    $('.mainArrow i:nth-child(2)').on('click', function () {
        $('.mainSlider').slick('slickNext')
    })

    $('.productSlider').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
    })

    $('.arrow i:nth-child(1)').on('click', function () {
        $('.productSlider').slick('slickPrev')
    })

    $('.arrow i:nth-child(2)').on('click', function () {
        $('.productSlider').slick('slickNext')
    })

})