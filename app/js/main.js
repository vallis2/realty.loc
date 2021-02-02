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


});