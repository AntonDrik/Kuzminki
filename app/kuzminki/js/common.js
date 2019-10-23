$(function() {

	$(document).ready(function() {

		$(window).on('resize', function() {
			windowW = $(window).width();
			if (windowW >= 767) {
				$('#menu').removeAttr('style');
			}
		});

		$(window).scroll(function(e) {
			if ($(window).scrollTop() >= 15) {
				$('.header').addClass('header-active');
				if ($(window).width() <= 576) {
					$('.header__info-contacts, .header__logo').hide();
					$('main').removeClass('main');
				}
			} else {
				$('.header__info-contacts, .header__logo').show();
				$('main').addClass('main');
				$('.header').removeClass('header-active');
			}
		});

		$(window).scroll();
		$(window).resize();

		$('.to-top').click(function () {
            $("html, body").animate({ scrollTop: 0 }, "slow");
        });

		$('.menu-mobile__bar').click(function(e) {
			e.preventDefault();
			$('#menu').slideToggle();
		});

		$('.catalog-slider__title').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			infinite: false,
			asNavFor: '.catalog-slider'
		});

		$('.catalog-slider').slick({
			slidesToShow: 1,
			slidesToScroll:1,
			arrows: true,
			infinite: false,
			asNavFor: '.catalog-slider__title',
			prevArrow: $('.prev-arrow'),
			nextArrow: $('.next-arrow'),
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 1,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					}
				},
				{
					breakpoint: 576,
					settings: {
						rows: 1,
						slidesToShow: 1,
					}
				}
			]
		});

		if($('video').length){
			$('.about__video').on('click', function () {
				$('.about__video-btn-play').toggleClass('hidden');
				if($('video')[0].paused) $('video')[0].play();
				else $('video')[0].pause();
			});
		}

	});

});
