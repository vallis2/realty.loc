$(function(){
  // menu__btn
  $('.menu__btn').on('click', function(){
    $('.nav').slideToggle();
  });

  $('.bottom__menu-btn').on('click', function(){
    $('.header__bottom-menu').slideToggle();
  });


});