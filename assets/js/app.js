$(document).ready(function () {
    // Hero Banner Slick Slider
    $('.banner_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        prevArrow: '<button type="button" class="prev_arrow"><iconify-icon icon="tabler:arrow-left" width="20"></iconify-icon></button>',
        nextArrow: '<button type="button" class="next_arrow"><iconify-icon icon="tabler:arrow-right" width="20"></iconify-icon></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
});