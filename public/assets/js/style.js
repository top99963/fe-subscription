$(document).ready(function(){
	var slideWrapper = $(".slide");
	var slideCount = null;

	slideWrapper.on("init", function(event, slick) {

        slideCount = slick.slideCount;

        if (slideCount > 1) {
             $(this).append('<div class="slide-count-wrap"> <span class="current"></span>  <span class="total"></span> </div>');
             setSlideCount();
             setCurrentSlideNumber(slick.currentSlide);
        } else if (slideCount <= 0) {
             $('.slide').addClass('hero-noslide');
        }
    });
    slideWrapper.on("beforeChange", function(event, slick, currentSlide, nextSlide) {
     	setCurrentSlideNumber(nextSlide);
     	slick = $(slick.$slider);
    });
        
    slideWrapper.slick({
	  	arrows: true,
	  	dots: true,
	  	autoplay:true,
	  	speed: 800,
	  	autoplaySpeed: 8000
	    // setting-name: setting-value
	});

  	function setSlideCount() {
     	var $el = $('.slide-count-wrap').find('.total');
     	$el.text('0'+slideCount);
	}

	function setCurrentSlideNumber(currentSlide) {
     	var $el = $('.slide-count-wrap').find('.current');
     	getcurrent = currentSlide+1;
     	$el.text('0'+getcurrent);
	}

	$('.news-list ul').slick({
        slidesToShow: 4,
	    slidesToScroll: 4,
        // centerMode: true,
         responsive: [
		    {
		      breakpoint: 769,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        arrows: false,
		        dots: false,
		        variableWidth: true,
		      }
		    },
		  ]
    });

    $('.form-tab-list ul a').click(function(e){
      e.preventDefault();
      $('.form-tab-list li').removeClass('active');
      $(this).parent().addClass('active');

      $('.form-tab-seller').toggleClass('active');
      $('.form-tab-buyer').toggleClass('active');
   });
  $('.form-tab-seller a').click(function(e){
      e.preventDefault();
      $('#register-success').addClass('show');
      $('.overlay').addClass('show');
  });
  $('.form-tab-buyer a').click(function(e){
      e.preventDefault();
      $('#register-success').addClass('show');
      $('.overlay').addClass('show');
  });
  $('.modal .close-modal,.modal .btn').click(function(e){
      e.preventDefault();
      $('#register-success').removeClass('show');
      $('.overlay').removeClass('show');
  });
  $('.down-to-content').click(function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $(".re-network").offset().top　-　100
      }, 500);
  });
  $('.btn-totop a').click(function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $('body').offset().top
      }, 1000);
  });


  
});

