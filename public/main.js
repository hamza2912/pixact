$(document).ready((function(){

  $(document.body).on('touchmove', onScroll); // for mobile
  $(window).on('scroll', onScroll);

  AOS.init();

    // setTimeout(() => {
    //   $("body").css("overflow", "auto");
    // }, 2000);

    $('.opener-logo').animate({
        opacity: 1,
    }, 2000);

    setTimeout(() => {
        $('.opener').fadeOut(1500);
    }, 3000)

    $('.show-nav').on('click', function () {

        $('.imaginary-header').fadeIn();
        $('.logo-container').addClass('opacity-0');
        // $('.home-content').fadeOut()
        $('.header').animate({
            left:"100%",
        }, 300);
        $('.nav-content').fadeIn();
        $('.nav-content').css("display", "flex");
        
    });
    
    $('.imaginary-logo-container').on('click', function () {

        $('.imaginary-header').fadeOut();
        $('.logo-container').removeClass('opacity-0');
        $('.nav-content').fadeOut();
        // $('.home-content').fadeIn();
        $('.header').animate({
            left:"0",
        }, 300);
        
    });

    $('.contactus').on('click', function () {

      $('.imaginary-header').fadeOut();
      $('.logo-container').removeClass('opacity-0');
      $('.nav-content').fadeOut();
      $('.header').animate({
          left:"0",
      }, 300);
      
  });

    function onScroll() {
      var scroll = $(window).scrollTop();
      if(scroll > 0){
        $('.see-our-work').fadeOut(200);
      } else{
        $('.see-our-work').fadeIn(200);
      }
    };

    var autoscroll1 = true;
    var autoscroll2 = true;
    var autoscroll3 = true;
    var autoscroll4 = true;
    var autoscroll5 = true;
    var autoscroll6 = true;
    var autoscroll7 = true;
    var autoscroll8 = true;
    var autoscroll9 = true;
    var autoscroll10 = true;

    if($('#root > div').hasClass("homepage")){
    
    if($(window).width() > 990){
      $(window).scroll(function (event) {
        var scroll_y_offset = 20;
        
        var scroll = $(window).scrollTop();
        if(scroll > 0 && autoscroll1){
          $('html, body').animate({
          scrollTop: $(window).height()
        }, 1000);
        autoscroll1 = false;
        }
        if(scroll > $(window).height() + scroll_y_offset && autoscroll2){
          $('html, body').animate({
          scrollTop: $(window).height()*2
        }, 1000);
         autoscroll2 = false;
        }
        if(scroll > ($(window).height()*2 + scroll_y_offset) && autoscroll3){
          $('html, body').animate({
          scrollTop: $(window).height()*3
        }, 1000);
         autoscroll3 = false;
        }
        if(scroll > ($(window).height()*3 + scroll_y_offset) && autoscroll4){
          $('html, body').animate({
          scrollTop: $(window).height()*4
        }, 1000);
         autoscroll4 = false;
        }
        if(scroll > ($(window).height()*4 + scroll_y_offset) && autoscroll5){
          $('html, body').animate({
          scrollTop: $(window).height()*5
        }, 1000);
         autoscroll5 = false;
        }
        if(scroll > ($(window).height()*5 + scroll_y_offset) && autoscroll6 && $('#root > div').hasClass("approach_page")){
          $('html, body').animate({
          scrollTop: $(window).height()*6
        }, 1000);
         autoscroll6 = false;
        }
        if(scroll > ($(window).height()*6 + scroll_y_offset) && autoscroll7 && $('#root > div').hasClass("approach_page")){
          $('html, body').animate({
          scrollTop: $(window).height()*7
        }, 1000);
         autoscroll7 = false;
        }
        if(scroll > ($(window).height()*7 + scroll_y_offset) && autoscroll8 && $('#root > div').hasClass("approach_page")){
          $('html, body').animate({
          scrollTop: $(window).height()*8
        }, 1000);
         autoscroll8 = false;
        }
        if(scroll > ($(window).height()*8 + scroll_y_offset) && autoscroll9 && $('#root > div').hasClass("approach_page")){
          $('html, body').animate({
          scrollTop: $(window).height()*9
        }, 1000);
         autoscroll9 = false;
        }
        if(scroll > ($(window).height()*9 + scroll_y_offset) && autoscroll10 && $('#root > div').hasClass("approach_page")){
          $('html, body').animate({
          scrollTop: $(window).height()*10
        }, 1000);
         autoscroll10 = false;
        }
        if(scroll == 0){
          autoscroll1 = true;
          autoscroll2 = true;
          autoscroll3 = true;
          autoscroll4 = true;
          autoscroll5 = true;
          autoscroll6 = true;
          autoscroll7 = true;
          autoscroll8 = true;
          autoscroll9 = true;
          autoscroll10 = true;
        }
      });
      }
    }

    $('#contact').on('click', function () {

      $('.contact-form').animate({
        opacity: 1,
        width: "100%",
      }, 200, function () {
        $('.contact-old').fadeOut();
        setTimeout(() => {
          $('.contact-form-body').slideDown( "fast", function() {
            // Animation complete.
          });
          $('.contact-form-body').css("display", "flex");
        }, 100);
      });
      
  });

    $('#work').hover(function() {
        $('.header-work').fadeIn();
        $('.nw').addClass('opacity-50');
      }, function() {
        $('.header-work').fadeOut();
        $('.nw').removeClass('opacity-50');
    });

    $('#services').hover(function() {
        $('.header-services').fadeIn();
        $('.ns').addClass('opacity-50');
      }, function() {
        $('.header-services').fadeOut();
        $('.ns').removeClass('opacity-50');

    });

    $('#approach').hover(function() {
        $('.header-approach').fadeIn();
        $('.na').addClass('opacity-50');
      }, function() {
        $('.header-approach').fadeOut();
        $('.na').removeClass('opacity-50');

    });

    $('#about').hover(function() {
        $('.header-contact').fadeIn();
        $('.nt').addClass('opacity-50');
      }, function() {
        $('.header-contact').fadeOut();
        $('.nt').removeClass('opacity-50');
    });

    $('#work1').hover(function() {
        $('.bg-service-data').fadeIn();
      }, function() {
        $('.bg-service-data').fadeOut();
    });

    $('#work2').hover(function() {
      $('.bg-service-ui').fadeIn();
    }, function() {
      $('.bg-service-ui').fadeOut();
  });


    $(window).scroll(function() {
      var scroll_height = $("body").prop("scrollHeight") - $(window).height();
      var scrollbar_offset = ($(window).scrollTop()/scroll_height)*($(window).height());
        $(".scrollbar").css({
          "top": (scrollbar_offset) + "px",
        });
    });

    $('.btn').hover(function() {
        $('.btn-primary').fadeIn();
    }, function() {
        $('.btn-primary').hide();
    });

      
   


    
  }));