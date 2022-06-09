$(document).ready((function(){

  $(document.body).on('touchmove', onScroll); // for mobile
  $(window).on('scroll', onScroll);

  AOS.init();

  // opener juery start
  $('.opener-logo').animate({
      opacity: 1,
  }, 2000);

  setTimeout(() => {
      $('.opener').fadeOut(1500);
  }, 3000)

  // setTimeout(() => {
  //   $("body").css("overflow", "auto");
  // }, 2000);
  // opener juery end

  


  // navbar jquery start
  $('.show-nav').on('click', function () {

      $('.imaginary-header').fadeIn();
      $('.logo-container').addClass('opacity-0');
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
      $('.header').animate({
          left:"0",
      }, 300);
      
  });
  // navbar jquery end




  // get in touch jquery start
  $('#getInTouch').on('click', function () {

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
  // get in touch jquery end


  
  // side nav anchors jquery start
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
  // side nav anchors jquery end




  // work jquery start
  $('.work').hover(function() {
    $('> div:nth-child(3)', this).fadeIn();
  }, function() {
    $('> div:nth-child(3)', this).fadeOut();
  });
  // work jquery start



  // Button jquery start
  $('.btn').hover(function(event) {
      $('.btn-primary').fadeIn();
  }, function(event) {
      $('.btn-primary').hide();
  });
  // Button jquery start


   // service section jquery start
   $('.services-options').on('click', function () {
    $('.services-options').removeClass("border-red-600");
    $(this).addClass("border-red-600");
    $('.services-content').hide();
    $('.float-around-box').addClass("opacity-0");
    $(this).find("div").removeClass("opacity-0");
    if ($(this).attr("id") == "digi"){
      $('#digi-content').fadeIn();
    } else if($(this).attr("id") == "dev"){
      $('#dev-content').fadeIn();
    } else if($(this).attr("id") == "data"){
      $('#data-content').fadeIn();
    } else {
      $('#ui-content').fadeIn();
    }
  });
  // service section jquery start




  // scroll events jquery start
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
    var autoscroll11 = true;

  
    function onScroll() {

      var scroll = $(window).scrollTop();

      var scroll_height = $("body").prop("scrollHeight") - $(window).height();
      var scrollbar_offset = (scroll/scroll_height)*($(window).height());
      $(".scrollbar").css({
        "top": (scrollbar_offset) + "px",
      });

      if($('#root > div').hasClass("homepage")){

        if($(window).width() > 990){

          var scroll_y_offset = 20;
          
          var scroll = $(window).scrollTop();
          if(scroll > 0 && autoscroll1){
            $('html, body').animate({
            scrollTop: $(window).height()
            }, 1000);
            autoscroll1 = false;
            $('.see-our-work').fadeOut(200);
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
          if(scroll > ($(window).height()*10 + scroll_y_offset) && autoscroll11 && $('#root > div').hasClass("approach_page")){
            $('html, body').animate({
            scrollTop: $(window).height()*11
            }, 1000);
            autoscroll11 = false;
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
            autoscroll11 = true;
            $('.see-our-work').fadeIn(200);
          }
        } else {
          if(scroll > 0){
            $('.see-our-work').fadeOut(200);
          }else{
            $('.see-our-work').fadeIn(200);
          }
        }
      }
    };
     // scroll events jquery end
      
  }));