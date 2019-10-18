$(function() {

	$(document).ready(function() {

		$(window).on('resize', function() {
			windowW = $(window).width();
			if (windowW >= 767) {
				$('#menu').removeAttr('style');
			}
		});
	

		if($(window).width() < 767){
			$('.header').addClass('header-active');
		}
		else {
			$(window).scroll(function(e) {
				if ($(window).scrollTop() >= 15) {
					$('.header').addClass('header-active');
				} else {
					$('.header').removeClass('header-active');
				}
			});
		}

		$('.menu-mobile__bar').click(function(e) {
			e.preventDefault();
			$('#menu').slideToggle();
		});

		$('.catalog-slider').slick({
			rows: 4,
			slidesToShow: 4,
			infinite: true,
			dots: true,
			arrows: true,
			prevArrow: $('.prev-arrow'),
			nextArrow: $('.next-arrow'),
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
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

	});

});
