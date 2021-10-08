$(function () {

  setTimeout(function() {
    $(".loading").fadeOut()
  }, 1000)
  // Fixed Header
  $(window).scroll(function() {
    if($(this).scrollTop() > 30 ) {
      $('.header').addClass('fixed-header');
    } else {
      $('.header').removeClass('fixed-header');
    }

    if($(this).scrollTop() > 300 ) {
      $('.btn-to-top').fadeIn();
    } else {
      $('.btn-to-top').fadeOut();
    }
  });

  $(".btn-to-top").click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 2000)
  })

  $(".show-menu").click(function () {
    $(".header .top-menu").addClass("show");
  });

  $(".close-menu").click(function () {
    $(".header .top-menu").removeClass("show");
  });

    /*slider*/
  $(".slider .owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

    /*testimonial*/
  $(".testimonial .owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
