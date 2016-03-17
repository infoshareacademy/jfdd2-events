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


var elementy = document.getElementsByClassName('test-pokazywania');


$(document).ready(function () {

  $(document).scroll(function () {

    var scrollViewportuOdGory = $(document).scrollTop();
    var wysokoscViewportu = window.innerHeight;


      for ( var i = 0 ; i < elementy.length ; i++ ) {

        if (scrollViewportuOdGory + wysokoscViewportu > elementy[i].offsetTop) {
          elementy[i].classList.remove('test-pokazywania-ukryty');
        }

      }

  })
})


$(document).ready(function () {


  $('#cookies').click(function () {
    setCookieValue()
    $(this).hide();

  });
  checkCookie(document.cookie);

  $("#formularz").submit(function () {

    var valid = 0;
    $(this).find('input[type=email], input[type=tel]').each(function () {
      if ($(this).val() !== "") {
        valid = 1;
      }
    });

    if (valid > 0) {
      return true;
    }
    else {
      alert("Wymagamy podania przynajmniej jednego pola");
      return false;
    }
  });


});