$(function () {


    $('.main_slide').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: false,
        speed: 1500,
        centerMode: true,
        centerPadding: false,
        responsive: [ // 반응형 웹 구현 옵션
            {
                breakpoint: 960, //화면 사이즈 960px
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768, //화면 사이즈 768px
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    })

    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    })



    $('.product_slide').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        speed: 500,

    });


    // 현재 슬릭 슬라이드 잡기 이때 슬릭이 centerMode: true, 여야 한다.
    $('.solution_slide').on('init afterChange', function () {
        var current = $('.solution_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
    });

    $('.solution_slide').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '10rem',
        speed: 1000,
        slidesToShow: 3, // 보여질슬라이드수(생략가능)
        slidesToScroll: 1, // 이동슬라이드수(생략가능)
        responsive: [ // 반응형 웹 구현 옵션
            {
                breakpoint: 960, //화면 사이즈 960px
                settings: {
                    slidesToShow: 1,
                    centerPadding: '0',
                }
            },
            {
                breakpoint: 768, //화면 사이즈 768px
                settings: {
                    slidesToShow: 1,
                    centerPadding: '0',
                }
            }
        ]
    });
    $('.main_solution .arrows .left').on('click', function () {
        $('.solution_slide').slick('slickPrev');
    })

    $('.main_solution .arrows .right').on('click', function () {
        $('.solution_slide').slick('slickNext');
    })




    // wave svg 자바 스크립트 (떙쳐옴)
    const main_wave_effect = function () {
        var _x2 = [96, 104, 96, 116, 157, 116, 153,
            191, 77, 208, 175, 164, 124, 180, 161,
            153, 120, 134, 136, 29, 93, 170, 66, 185,
            153, 167, 19, 52, 179, 116, 160, 179, 197,
            144, 125, 112, 139, 103, 143, 68, 120, 108, 96
        ];
        var _x1 = [83, 76, 67, 103, 87, 45, 124, 24,
            65, 88, 85, 97, 80, 133, 87, 97, 73, 59,
            58, 20, 40, 100, 31, 77, 39, 0, 10, 29,
            61, 34, 125, 13, 187, 48, 69,
            80, 77, 44, 112, 58, 75, 75, 84
        ];
        var _y = [128, 139, 149, 149, 160, 171, 171,
            181, 192, 192, 203, 213, 224, 224, 235,
            246, 256, 267, 278, 288, 288, 288, 299,
            299, 310, 320, 331, 331, 331, 342, 342,
            353, 353, 363, 374, 384, 395, 405, 405,
            416, 416, 427, 439
        ];
        for (i = 0; i < _x2.length; i++) {
            var newLine = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            newLine.setAttribute('x', _x1[i]);
            newLine.setAttribute('y', _y[i]);
            newLine.setAttribute('width', _x2[i] - _x1[i]);
            newLine.setAttribute('height', 1);
            $("#wave")[0].appendChild(newLine);
        }

        function line_graph(p) {
            $('#wave rect').each(function (e) {
                var r = Math.random(1) * 150;
                if (p == 1) {
                    $(this).delay(e * 0.75 * r).animate({
                        'width': _x2[e] - _x1[e],
                        'x': _x1[e]
                    }, 1000, function () {
                        if (e == 42) {
                            setTimeout(function () {
                                line_graph(0);
                            }, 300);
                        }
                    })
                } else {
                    $(this).delay(e * 0.75 * r).animate({
                        'width': r,
                        'x': 90 - (r / 2)
                    }, 1000, function () {
                        if (e == 42) {
                            setTimeout(function () {
                                line_graph(1);
                            }, 300);
                        }
                    })
                }
            })
        }
        line_graph(0);

    }
    main_wave_effect();



    $('.mobile_btn').on('click', function () {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
    });

    $('.gnb>ul>li>a').on('click', function (e) {

        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
        }
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().find('.gnb .sub_menu').stop().slideUp();
    });




    $(window).on('resize', function () {
        $('.gnb .sub_menu').removeAttr('style')
    })

    // 모바일 메뉴 스크롤 없애기
    $('.gnb').on('wheel', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
        }
    })


});