/**
 * Created by lukaszpotas on 09.03.16.
 */
function setCookieValue() {
  document.cookie = 'imie=jan';
}

function checkCookie(cookieNeV) {

  var cookie = document.cookie.split(';').map(function (item) {
    var parts = item.split('=');
    var cookie = {
      name: parts[0],
      value: parts[1]
    };
    return cookie;
  }).find(function (item) {
    if (item.value === 'jan') {
      $('#cookies').css('display', 'none');
    }
  });
}

$(document).ready(function () {
  
  //zmniejsza wysokosc menu po scrogolwaniu w dol
  $(window).scroll(function(){
  var scrollValue = $(window).scrollTop();
    if(scrollValue > 50){
    $('#menu').addClass("menu-dol");
    $('#menu-logo').addClass("menu-logo-dol");
    } else {
      $('#menu').removeClass("menu-dol");
      $('#menu-logo').removeClass("menu-logo-dol");
    }
  });

  $('#cookies').click(function () {
    setCookieValue();
    $(this).hide();

  });
  checkCookie(document.cookie);

  $("#formularz").submit(function () {

    var valid = 0;
    $(this).find('input[type=email], input[type=tel]').each(function () {
      if ($(this).val() !== ""){
          valid = 1;
      }
    });

    if (valid>0) {
      return true;
    }
    else {
      alert("Wymagamy podania przynajmniej jednego pola");
      return false;
    }
  });
});