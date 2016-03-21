var przycisk1 = $('.przycisk1');
var przycisk2 = $('.przycisk2');
var przycisk3 = $('.przycisk3');
var logo = $('.logo');
$(window).scroll(function(){
  var scroll = $(window).scrollTop();

  if (scroll >=350 && scroll <=800) {
    przycisk1.removeClass('przyciskDol').addClass('przyciskX');
  }else {
    przycisk1.removeClass('przyciskX').addClass('przycisk');
  }
  if(scroll >= 850 && scroll <1280) {
    przycisk2.removeClass('przyciskDol').addClass('przyciskX')
  }else {
    przycisk2.removeClass('przyciskX').addClass('przycisk')
  }
  if(scroll>1250) {
    przycisk3.removeClass('przyciskDol').addClass('przyciskX')
  }else {
    przycisk3.removeClass('przyciskX').addClass('przycisk')
  }
});