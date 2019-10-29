$(document).ready(function () {
  var slideWrapper = $(".slide");
  var slideCount = null;

  $(".slide .item-slide > img").css('min-height', $('.slide').height());

  if ($('.slide').length) {
    slideWrapper.on("init", function (event, slick) {
      slideCount = slick.slideCount;

      if (slideCount > 1) {
        $(this).append('<div class="slide-count-wrap"> <span class="current"></span>  <span class="total"></span> </div>');
        setSlideCount();
        setCurrentSlideNumber(slick.currentSlide);
      } else if (slideCount <= 0) {
        $('.slide').addClass('hero-noslide');
      }
    });
    slideWrapper.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      setCurrentSlideNumber(nextSlide);
      slick = $(slick.$slider);
    });

    slideWrapper.slick({
      arrows: true,
      dots: true,
      autoplay: true,
      speed: 800,
      infinite: true,
      fade: true,
      autoplaySpeed: 8000,
      pauseOnHover: false,
    });
  }

  function setSlideCount() {
    var $el = $('.slide-count-wrap').find('.total');
    $el.text('0' + slideCount);
  }

  function setCurrentSlideNumber(currentSlide) {
    var $el = $('.slide-count-wrap').find('.current');
    getcurrent = currentSlide + 1;
    $el.text('0' + getcurrent);
  }

  if ($('.news-list').length) {
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
  }

  // about
  $('.nav-top li:nth-child(1) a,.down-to-content, .nav-footer li:nth-child(2) a').click(function (e) {
    if ($(this).attr("href") === "" || $(this).attr("href") === "#") {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $(".re-network").offset().top - 100
      }, 500);
    }
    if ($(".nav-cover").hasClass("show")) {
      $(".nav-cover").removeClass("show");
      $('body').removeClass('show-menu');
    }
  });
  // news
  $('.nav-top li:nth-child(3) a, .nav-footer li:nth-child(3) a').click(function (e) {
    if ($(this).attr("href") === "" || $(this).attr("href") === "#") {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $(".news").offset().top
      }, 500);
    }
    if ($(".nav-cover").hasClass("show")) {
      $(".nav-cover").removeClass("show");
      $('body').removeClass('show-menu');
    }
  });
  // partner
  $('.nav-top li:nth-child(4) a, .nav-footer li:nth-child(4) a').click(function (e) {
    if ($(this).attr("href") === "" || $(this).attr("href") === "#") {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $(".founding-member").offset().top - 100
      }, 500);
    }
    if ($(".nav-cover").hasClass("show")) {
      $(".nav-cover").removeClass("show");
      $('body').removeClass('show-menu');
    }
  });

  if ($('.nav-product').length) {
    $('.nav-product li:nth-child(1) a').click(function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $(".eacs").offset().top - 100
      }, 500);
    });
    $('.nav-product li:nth-child(2) a').click(function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $(".ppa").offset().top - 100
      }, 500);
    });
    $('.nav-product li:nth-child(3) a').click(function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $(".greenev").offset().top - 100
      }, 500);
    });
  }

  $('.navbar-toggler').click(function (e) {
    e.preventDefault();
    $('.nav-cover').toggleClass('show');
    $('body').toggleClass('show-menu');
  });

  $('.form-tab-list ul a').click(function (e) {
    e.preventDefault();
    $('.form-tab-list li').removeClass('active');
    $(this).parent().addClass('active');

    $('.form-tab-seller').toggleClass('active');
    $('.form-tab-buyer').toggleClass('active');
  });

  $('.dvid-1').click(function (e) {
    e.preventDefault();
    $('#dvid-1').addClass('show');
    $('.overlay').addClass('show');
    $('#dvid-1').find('video').trigger('play');
  });
  $('.dvid-2').click(function (e) {
    e.preventDefault();
    $('#dvid-2').addClass('show');
    $('.overlay').addClass('show');
    $('#dvid-2').find('video').trigger('play');
  });
  $('.modal .close-modal,.modal .btn,.overlay').click(function (e) {
    e.preventDefault();
    $('#dvid-2,#dvid-1').removeClass('show');
    $('.overlay').removeClass('show');

    $('#dvid-1 video').get(0).pause();
    $('#dvid-1 video').get(0).currentTime = 0;

    $('#dvid-2 video').get(0).pause();
    $('#dvid-2 video').get(0).currentTime = 0;
  });

  $('.btn-totop a').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('body').offset().top
    }, 1000);
  });
});

