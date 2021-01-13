try {
    window.jQuery = window.$ = require('jquery');
	require('jquery.easing'); // dat works :3
	require('owl.carousel');
	require('aos');
} catch (e) {}

window.Sticky = require('../../node_modules/jquery-sticky/jquery.sticky.js');
import AOS from 'aos';

(function ($) {
  // Smooth Scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  $('.pricinglink').click(function(e) {
    e.preventDefault();
    var priceScroll = $(this).attr("href");
	$('html,body').animate({scrollTop: $(priceScroll).offset().top},1500, 'easeInOutExpo');
	return false;
});

  $('.featureslink').click(function(e){
	e.preventDefault();
	  var featuresScroll = $(this).attr("href")
	$('html, body').animate({scrollTop : $(featuresScroll).offset().top},1500, 'easeInOutExpo');
	return false;
});
	

  $(".contactlink").click(function(e) {
    e.preventDefault();
    var contactScroll = $(this).attr("href");
	$('html,body').animate({scrollTop: $(contactScroll).offset().top},1500, 'easeInOutExpo');
	return false;
});

  // Scroll screen to target element

 


  var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');iu97
				$('body').find('.js-menu-toggle').removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$('body').find('.js-menu-toggle').addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
					$('body').find('.js-menu-toggle').removeClass('active');
				}
	    }
		});
	}; 
	siteMenuClone();

	var siteScroll = function() {	

  	$(window).scroll(function() {

  		var st = $(this).scrollTop();

  		if (st > 100) {
  			$('.js-sticky-header').addClass('shrink');
  		} else {
  			$('.js-sticky-header').removeClass('shrink');
  		}

  	}) 

  };
  siteScroll();

  var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();
  
  var siteOwlCarousel = function() {
  	$('.testimonial-carousel').owlCarousel({
		  center: true,
	    items: 1,
	    loop: true,
	    margin: 0,
	    autoplay: true,
	    smartSpeed: 1000,
		});
  };
  siteOwlCarousel();


})(jQuery);
AOS.init({
	easing: 'ease',
	duration: 1000,
	once: true
});

