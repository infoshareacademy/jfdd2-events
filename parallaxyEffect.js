$(document).ready(function () {

  $(window).scroll(function(){
    var scrollValue = $(window).scrollTop();
    var $image = $('.parallaxy');
    var positonOfParallaxyContainer = $image.offset().top;
    var value = (positonOfParallaxyContainer - scrollValue) * 0.3;

    $image.css('background-position', 'center ' + value + 'px')

  })
















});


