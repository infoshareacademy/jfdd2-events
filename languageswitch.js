/**
 * Created by bartlomiejmilewski on 25.03.16.
 */

$(function() {
  $('#languageswitchbutton').click(function() {

    $('.polski').toggle();
    $('.angielski').toggle();
    var src = $(this).attr('src');
    var src2 = $(this).attr('src2');
    $(this).attr('src', src2).attr('src2', src);


    //na dole idiotproof//

    //$('.polski').toggleClass('hide');
    //if ($('.angielski').is('hidden')) {
    //
    //  $('.angielski').removeClass('hidden');
    //  $('.angielski').addClass('show');
    //}
    //else {
    //
    //  $('.angielski').addClass('hidden');
    //  $('.angielski').removeClass('show');
    //}
  });
});