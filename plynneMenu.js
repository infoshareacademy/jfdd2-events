/**
 * Created by bartlomiejmilewski on 18.03.16.
 */
$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top - 25
    }, 900, 'swing', function () {
      window.location.hash = target;
    });
  });
});