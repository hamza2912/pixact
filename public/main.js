$(document).ready((function(){

  AOS.init();

  setTimeout(() => {
    $("body").css("overflow", "auto");
  }, 2000);

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

    $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      if(scroll > 0){
        $('.see-our-work').fadeOut(200);
      } else{
        $('.see-our-work').fadeIn(200);
      }
    });

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
    
    $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      if(scroll > 0 && autoscroll1){
        $('html, body').animate({
        scrollTop: $(window).height()
      }, 1000);
      autoscroll1 = false;
      }
      if(scroll > $(window).height() + 20 && autoscroll2){
        $('html, body').animate({
        scrollTop: $(window).height()*2
      }, 1000);
       autoscroll2 = false;
      }
      if(scroll > ($(window).height()*2 + 20) && autoscroll3){
        $('html, body').animate({
        scrollTop: $(window).height()*3
      }, 1000);
       autoscroll3 = false;
      }
      if(scroll > ($(window).height()*3 + 20) && autoscroll4){
        $('html, body').animate({
        scrollTop: $(window).height()*4
      }, 1000);
       autoscroll4 = false;
      }
      if(scroll > ($(window).height()*4 + 20) && autoscroll5 && $('#root > div').hasClass("approach_page")){
        $('html, body').animate({
        scrollTop: $(window).height()*5
      }, 1000);
       autoscroll5 = false;
      }
      if(scroll > ($(window).height()*5 + 20) && autoscroll6 && $('#root > div').hasClass("approach_page")){
        $('html, body').animate({
        scrollTop: $(window).height()*6
      }, 1000);
       autoscroll6 = false;
      }
      if(scroll > ($(window).height()*6 + 20) && autoscroll7 && $('#root > div').hasClass("approach_page")){
        $('html, body').animate({
        scrollTop: $(window).height()*7
      }, 1000);
       autoscroll7 = false;
      }
      if(scroll > ($(window).height()*7 + 20) && autoscroll8 && $('#root > div').hasClass("approach_page")){
        $('html, body').animate({
        scrollTop: $(window).height()*8
      }, 1000);
       autoscroll8 = false;
      }
      if(scroll > ($(window).height()*8 + 20) && autoscroll9 && $('#root > div').hasClass("approach_page")){
        $('html, body').animate({
        scrollTop: $(window).height()*9
      }, 1000);
       autoscroll9 = false;
      }
      if(scroll > ($(window).height()*9 + 20) && autoscroll10 && $('#root > div').hasClass("approach_page")){
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
        $('.bg-work').fadeIn();
        $('.nw').addClass('opacity-50');
      }, function() {
        $('.bg-work').fadeOut();
        $('.nw').removeClass('opacity-50');
    });

    $('#services').hover(function() {
        $('.bg-services').fadeIn();
        $('.ns').addClass('opacity-50');
      }, function() {
        $('.bg-services').fadeOut();
        $('.ns').removeClass('opacity-50');

    });

    $('#approach').hover(function() {
        $('.bg-approach').fadeIn();
        $('.na').addClass('opacity-50');
      }, function() {
        $('.bg-approach').fadeOut();
        $('.na').removeClass('opacity-50');

    });

    $('#about').hover(function() {
        $('.bg-about').fadeIn();
        // $('.bg-about').animate({
        //   opacity: 1,
        // }, 500);
        $('.nt').addClass('opacity-50');
      }, function() {
        $('.bg-about').fadeOut();
        // $('.bg-about').animate({
        //   opacity: 0,
        // }, 500);
        $('.nt').removeClass('opacity-50');
    });

    $('#work1').hover(function() {
        $('.bg-about').fadeIn();
      }, function() {
        $('.bg-about').fadeOut();
    });


    $(window).scroll(function() {
      console.log($(window).height());
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