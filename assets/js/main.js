(function ($) {
    "use strict";


    $(window).on("load", function () {
        wowAnimation();
    });


    // sticky js 
    var windowOn = $(window);
    windowOn.on('scroll', function () {
        var scroll = windowOn.scrollTop();
        if (scroll < 100) {
            $("#mk-header-sticky").removeClass("header-sticky");
        } else {
            $("#mk-header-sticky").addClass("header-sticky");
        }
    });

    // mobile menu 
    var mkMenuWrap = $('.mk-mobile-menu-active > ul').clone();
    var mkSideMenu = $('.mk-offcanvas-menu nav');
    mkSideMenu.append(mkMenuWrap);
    if ($(mkSideMenu).find('.sub-menu, .mk-mega-menu').length != 0) {
        $(mkSideMenu).find('.sub-menu, .mk-mega-menu').parent().append('<button class="mk-menu-close"><i class="fas fa-chevron-right"></i></button>');
    }

    var sideMenuList = $('.mk-offcanvas-menu nav > ul > li button.mk-menu-close, .mk-offcanvas-menu nav > ul li.has-dropdown > a');
    $(sideMenuList).on('click', function (e) {
        console.log(e);
        e.preventDefault();
        if (!($(this).parent().hasClass('active'))) {
            $(this).parent().addClass('active');
            $(this).siblings('.sub-menu, .mk-mega-menu').slideDown();
        } else {
            $(this).siblings('.sub-menu, .mk-mega-menu').slideUp();
            $(this).parent().removeClass('active');
        }
    });

    // offcanvas-bar 
    $(".mk-offcanvas-toggle").on('click', function () {
        $(".mk-offcanvas").addClass("mk-offcanvas-open");
        $(".mk-offcanvas-overlay").addClass("mk-offcanvas-overlay-open");
    });
    $(".mk-offcanvas-close-toggle,.mk-offcanvas-overlay").on('click', function () {
        $(".mk-offcanvas").removeClass("mk-offcanvas-open");
        $(".mk-offcanvas-overlay").removeClass("mk-offcanvas-overlay-open");
    });

    // search-bar 
    $(".mk-search-toggle").on('click', function () {
        $(".mk-header-search-bar").addClass("mk-search-open");
        $(".mk-offcanvas-overlay").addClass("mk-offcanvas-overlay-open");
    });
    $(".mk-search-close,.mk-offcanvas-overlay").on('click', function () {
        $(".mk-header-search-bar").removeClass("mk-search-open");
        $(".mk-offcanvas-overlay").removeClass("mk-offcanvas-overlay-open");
    });


    // data bg img
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    })

    // data bg color
    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"))
    })

    // data color
    $("[data-color]").each(function () {
        $(this).css("color", $(this).attr("data-color"))
    })

    $('.popup-image').magnificPopup({
        type: 'image'
        // other options
    });
    $('.popup-video').magnificPopup({
        type: 'iframe'
        // other options
    });

    if ($('.grid').length != 0) {
        var $grid = $('.grid').imagesLoaded(function () {
            $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    columnWidth: 1
                }
            })
            // filter items on button click
            $('.mk-portfolio-filter').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
            });
            $('.mk-portfolio-filter button').on('click', function (event) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                eventy.preventDefault();
            });
        });
    }

    // mk-test-active slider
    var swiper = new Swiper(".mk-test-active", {
        slidesPerView: 4,
        autoHeight: true,
        spaceBetween: 30,
        keyboard: {
            enabled: false,
        },
        navigation: {
            nextEl: ".mk-review-button-next",
            prevEl: ".mk-review-button-prev",
        },
        pagination: {
            el: ".mk-swiper-test-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });

    // blog slider
    var swiper = new Swiper(".mk-blog-active", {
        slidesPerView: 1,
        autoHeight: true,
        spaceBetween: 0,
        keyboard: {
            enabled: false,
        },
        navigation: {
            nextEl: ".mk-swiper-blog-button-next",
            prevEl: ".mk-swiper-blog-button-prev",
        },
        pagination: {
            el: ".mk-swiper-test-pagination",
            clickable: true,
        },
    });

    // testimonial slider
    var swiper = new Swiper(".mk-testimonial-active", {
        slidesPerView: 1,
        autoHeight: true,
        spaceBetween: 30,
        keyboard: {
            enabled: false,
        },
        navigation: {
            nextEl: ".mk-swiper-test-button-next",
            prevEl: ".mk-swiper-test-button-prev",
        },
        pagination: {
            el: ".mk-swiper-test-pagination",
            clickable: true,
        },
    });

    // testimonial thumb galary slider
    var swiper_thumb = new Swiper(".mk-testimonial-thumb-active", {
        loop: true,
        // spaceBetween: 10,
        slidesPerView: 3,
        centeredSlides: true,
        // freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper_content = new Swiper(".mk-testimonial-content-active", {
        loop: true,
        // spaceBetween: 10,
        navigation: {
            nextEl: ".mk-swiper-test-button-next",
            prevEl: ".mk-swiper-test-button-prev",
        },
        thumbs: {
            swiper: swiper_thumb,
        },
    });


    // headline slider
    var swiper = new Swiper(".mk-headline-active", {
        slidesPerView: 'auto',
        spaceBetween: 40,
        freemode: true,
        centeredSlides: true,
        loop: true,
        speed: 6000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
    });

    // brand slider 
    var swiper = new Swiper(".mk-brand-top-active", {
        slidesPerView: 'auto',
        spaceBetween: 80,
        freemode: true,
        centeredSlides: true,
        loop: true,
        speed: 4000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
    });

    // // brand slider  
    // var swiper = new Swiper(".mk-brand-bottom-active", {
    //     slidesPerView: 'auto',
    //     spaceBetween: 80,
    //     freemode: true,
    //     centeredSlides: true,
    //     loop: true,
    //     speed: 4000,
    //     allowTouchMove: false,
    //     autoplay: {
    //         delay: 1,
    //         disableOnInteraction: true,
    //     },
    // });


    // brand normal slider
    var swiper = new Swiper(".mk-brand-normal-active", {
        slidesPerView: 5,
        spaceBetween: 30,
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".mk-swiper-team-button-next",
            prevEl: ".mk-swiper-team-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 5,
            },
        },
    });

    // team slider
    var swiper = new Swiper(".mk-team-active", {
        slidesPerView: 4,
        spaceBetween: 30,
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".mk-swiper-team-button-next",
            prevEl: ".mk-swiper-team-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });

    // project slider
    var swiper = new Swiper(".mk-project-active", {
        slidesPerView: 4,
        spaceBetween: 30,
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".mk-swiper-team-button-next",
            prevEl: ".mk-swiper-team-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });


    // wow js 
    function wowAnimation() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
    }


    if ($('.jarallax').length) {
        $('.jarallax').jarallax({
            speed: 0.2,
        });
    }





})(jQuery);