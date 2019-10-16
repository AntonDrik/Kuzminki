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

	});

});
