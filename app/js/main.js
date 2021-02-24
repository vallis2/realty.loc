$(function(){
  // menu__btn
  $('.menu__btn').on('click', function(){
    $('.nav').slideToggle();
  });

  $('.bottom__menu-btn').on('click', function(){
    $('.header__bottom-menu').slideToggle();
  });


  $('.header__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    adaptiveHeight: true
    
  });

  $('.header__slider2-box-left').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slider2 slider2__left icon-angle-left"></button>',
    nextArrow: '<button class="slider2 slider2__right icon-angle-right"></button>',
    dots: false
    
  });

  $('.slider3__wrap').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: '<button class="slider3 slider3__left icon-angle-left"></button>',
    nextArrow: '<button class="slider3 slider3__right icon-angle-right"></button>',
    dots: false,
    responsive: [
      {
        breakpoint: 1286,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
          dots: true
        }
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // arrows: true,
          // dots: true
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
          // dots: true
        }
      },
     
    ]
   
    
  });

  $('.slider4__wrap').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slider4 slider4__left icon-angle-left"></button>',
    nextArrow: '<button class="slider4 slider4__right icon-angle-right"></button>',
    dots: false
    
  });

  $('.tab').on('click', function (e) {
    e.preventDefault();
    $($(this).siblings()).removeClass('tab--active');
    $($(this).closest('.tabs-wrap').siblings().find('div')).removeClass('tabs-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');

  //    Добавляется при tabs
    $('.slider3__wrap').slick('setPosition');

  });



  $('.footer-realty__show-all, .footer-realty__hide').on('click', function(e){
    e.stopPropagation();
  
    $('.footer-realty__item-all').slideToggle('200');
    $('.footer-realty__hide').toggleClass('footer-realty__hide--active');
    $('.footer-realty__show-all').toggleClass('footer-realty__show-all--active');
      
  });
  $('.footer-realty__show-all2, .footer-realty__hide2').on('click', function(e){
    e.stopPropagation();
  
    $('.footer-realty__item-all2').slideToggle('200');
    $('.footer-realty__hide2').toggleClass('footer-realty__hide2--active');
    $('.footer-realty__show-all2').toggleClass('footer-realty__show-all2--active');
      
  });
  $('.footer-realty__show-all3, .footer-realty__hide3').on('click', function(e){
    e.stopPropagation();
  
    $('.footer-realty__item-all3').slideToggle('200');
    $('.footer-realty__hide3').toggleClass('footer-realty__hide3--active');
    $('.footer-realty__show-all3').toggleClass('footer-realty__show-all3--active');
      
  });
  $('.footer-realty__show-all4, .footer-realty__hide4').on('click', function(e){
    e.stopPropagation();
  
    $('.footer-realty__item-all4').slideToggle('200');
    $('.footer-realty__hide4').toggleClass('footer-realty__hide4--active');
    $('.footer-realty__show-all4').toggleClass('footer-realty__show-all4--active');
      
  });


  $('.footer__menu-btn').on('click', function(){
    $('.footer__bottom-menu').slideToggle();
  });
 

 

 

  var mixer = mixitup('.realty-info__wrapper-box');


});