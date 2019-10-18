$(document).ready(function(){
	var slideWrapper = $(".slide");
	var slideCount = null;

  $(".slide .item-slide > img").css('min-height', $('.slide').height());

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
      infinite: true,
	  	autoplaySpeed: 5000,
      pauseOnHover: false,
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
      slidesToShow: 3,
	    slidesToScroll: 3,
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

  // about
  $('.nav-top li:nth-child(1) a,.down-to-content').click(function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $(".re-network").offset().top　-　100
      }, 500);
  });
  // $('.nav-top li:nth-child(2) , .nav-footer li:nth-child(2)').click(function(e){
  //     e.preventDefault();
  //     $('html, body').animate({
  //       scrollTop: $(".why-join").offset().top -　100
  //     }, 500);
  // });
  // news
  $('.nav-top li:nth-child(3), .nav-footer li:nth-child(3)').click(function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $(".news").offset().top
      }, 500);
  });
  // partner
  $('.nav-top li:nth-child(4) , .nav-footer li:nth-child(4)').click(function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $(".founding-member").offset().top -　100
      }, 500);
  });
  // $('.nav-top li:nth-child(5)').click(function(e){
  //     e.preventDefault();
  //     $('html, body').animate({
  //       scrollTop: $(".hero-slide").offset().top
  //     }, 500);
  // });


  $('.navbar-toggler').click(function(e){
    e.preventDefault();
    $('.nav-cover').toggleClass('show');
    $('body').toggleClass('show-menu');
  });

  $('.form-tab-list ul a').click(function(e){
    e.preventDefault();
    $('.form-tab-list li').removeClass('active');
    $(this).parent().addClass('active');

    $('.form-tab-seller').toggleClass('active');
    $('.form-tab-buyer').toggleClass('active');
  });
  $('.modal .close-modal,.modal .btn').click(function(e){
      e.preventDefault();
      $('#register-success').removeClass('show');
      $('.overlay').removeClass('show');
  });
  
  $('.btn-totop a').click(function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $('body').offset().top
      }, 1000);
  });


  
});

