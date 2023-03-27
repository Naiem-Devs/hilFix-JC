(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  // owlCarousel
  $(".testimonial_slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 3,
    navText: [
      '<i class="fas fa-caret-left"></i>',
      '<i class="fas fa-caret-right"></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 3
      }
    }
  });


$('select').niceSelect();
 

document.querySelector('html').classList.remove('no-js');
    if (!window.Cypress) {

      AOS.init({
        mirror: true,
        duration: 1500,
        initClassName: 'aos-init',
        once: true,
      });

    }
})(jQuery);
