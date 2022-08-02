$(document).ready(function ($) {
    $('.banner-slider').slick({
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 300,
        prevArrow: '<button class="slick-prev slick_arrow_btns p-0 border-0"><img src="assets/images/slider-left-arrow.svg" alt="slider previous"></button>',
        nextArrow: '<button class="slick-next slick_arrow_btns p-0 border-0"><img src="assets/images/slider-right-arrow.svg" alt="slider next"></button>',
        appendArrows: ".banner-slider-btns"
    });

    function HeaderBg() {
        var imageUrl = $('.banner-slider .slick-current.slick-active').attr('data-bgImage');
        $('#sliderBg').css("background-image", "url(" + imageUrl + ")");
    }
    HeaderBg();
    $('.banner-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        HeaderBg();
    });
    //var $current_slide = $('.current-slide');            
    $('.admistration-slider').slick({
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: $('.prev-btn img'),
        nextArrow: $('.next-btn img'),
        asNavFor: '.thumbnail-slider'
    });
    $('.thumbnail-slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        //autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        draggable: true,
        asNavFor: '.admistration-slider',
        focusOnSelect: true,
    });
    var administration_info_total_slides = $('.admin-slides.slick-slide').length;
    if (administration_info_total_slides < 10) {
        $('.admin-total-slides').text("0" + administration_info_total_slides);
    } else {
        $('.admin-total-slides').text(administration_info_total_slides);
    }

    function getCurrentSlideNumber() {
        var administration_info_current_slide_index = $('.admin-slides.slick-slide.slick-current.slick-active').index();
        var administration_info_current_slide = administration_info_current_slide_index + 1;

        if (administration_info_current_slide < 10) {
            $('.admin-current-slide').text("0" + administration_info_current_slide);
        } else {
            $('.admin-current-slide').text(administration_info_current_slide);
        }

        var slidesProgress = (administration_info_current_slide / administration_info_total_slides) * 100;
        $('.administration-info-slides-progress').css('width', slidesProgress + "%").attr('aria-valuenow', slidesProgress);

        var adminSlideHeigt = $('.admistration-slider .admin-slides.slick-slide.slick-current.slick-active .details').height() + 60 + "px";
        $('.administation-slider-thumbnails').css('top', adminSlideHeigt);

    }
    getCurrentSlideNumber();
    $('.admistration-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        getCurrentSlideNumber();
    });
    $('.news-slider').slick({
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: '<button class="slick-prev slick_arrow_btns p-0 border-0"><img src="assets/images/ticker-arrow-left.png" alt="slider previous"></button>',
        nextArrow: '<button class="slick-next slick_arrow_btns p-0 border-0"><img src="assets/images/ticker-arrow-right.png" alt="slider next"></button>',
    });
    $('.latest-news-slider').slick({
        infinite: true,
        autoplay: false,
        //autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.news-slider-arrows .prev-arrow'),
        nextArrow: $('.news-slider-arrows .next-arrow'),

        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }

        ]
    });
    function appendControls() {
        if ($(window).width() < 1200) {
            $('.sliderControls').appendTo('.appendSliderControls')
        }
        else {
            $('.sliderControls').appendTo('.controlsPrepend');
        }
    }
    appendControls();
    $(window).resize(function () {
        appendControls();
    });
    $('#toggleGreyLayout').click(function (e) {
        e.preventDefault();
        $('body').toggleClass('greyScaleLayout');
    })
});
