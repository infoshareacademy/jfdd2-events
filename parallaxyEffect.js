$(document).ready(function () {

  $(window).scroll(function(){
    var scrollValue = $(window).scrollTop();
    var $image = $('.parallaxy');
    var positonOfParallaxyContainer = $image.offset().top;
    var value = (positonOfParallaxyContainer - scrollValue) * 0.3;
// console.log(scrollValue)
    $image.css('background-position', 'center ' + value + 'px')

  })
















});


