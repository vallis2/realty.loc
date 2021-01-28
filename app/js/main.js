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
    responsive: [
      {
        breakpoint: 980,
        settings: {
          dots: false
        }
      }
    ]
  });

  $('.header__slider2-box-left').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slider2__wrap-left icon-angle-left"></button>',
    nextArrow: '<button class="slider2__wrap-right icon-angle-right"></button>',
    dots: false
    
  });


});