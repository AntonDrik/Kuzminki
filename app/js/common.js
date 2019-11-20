$(function() {

	function mobileMenuHide(elem) {
		$('#menu').hide();
		if (elem.hasClass('open')) {
			elem.removeClass('open');
		}
	}

	function menuInfoSwitch(isTop, headerLogo, headerInfo) {
		if (isTop) {
			$('main').addClass('main');
			headerLogo.attr('src', 'img/_src/logo.png');
			headerLogo.css('height', '103px');
			headerInfo.show();
		}
		else {
			$('main').removeClass('main');
			headerInfo.hide();
			headerLogo.attr('src', 'img/_src/smallLogo.svg');
			headerLogo.css('height', '33px');
		}
	}

	$(document).ready(function() {

		const headerLogo = $('.header__logo img');
		const menuBtn = $('.menu-mobile__bar');
		const headerInfo = $('.header__info');

		$(window).on('resize', function() {
			windowW = $(window).width();
			if (windowW >= 767) {
				$('#menu').removeAttr('style');
			}
		});

		$(window).scroll(function(e) {
			if ($(window).scrollTop() >= 15) {
				$('.header').addClass('header-active');
				if ($(window).width() <= 772) { mobileMenuHide(menuBtn); }
				else { menuInfoSwitch(false, headerLogo, headerInfo); }
			}
			else {
				$('.header').removeClass('header-active');
				if ($(window).width() >= 772) { menuInfoSwitch(true, headerLogo, headerInfo); }
			}
		});

		$(window).scroll();
		$(window).resize();

		$('.to-top').click(function () {
            $("html, body").animate({ scrollTop: 0 }, "slow");
        });

		$('.menu-mobile__bar').click(function(e) {
			e.preventDefault();
			const btn = $('.menu-mobile__bar');
			$('#menu').slideToggle();
			if (!btn.hasClass('open')) {
				btn.addClass('open');
			}
			else {
				btn.removeClass('open');
			}
		});

		$('.catalog-slider__title').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			infinite: false,
			asNavFor: '.catalog-slider'
		});

		$('.catalog-divider').slick({
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
			asNavFor: '.catalog-slider__item',
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
