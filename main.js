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


var elementy = document.getElementsByClassName('animacja-ikon');


$(document).ready(function () {

  $(document).scroll(function () {

    var scrollViewportuOdGory = $(document).scrollTop();
    var wysokoscViewportu = window.innerHeight;


      for ( var i = 0 ; i < elementy.length ; i++ ) {

        if (scrollViewportuOdGory + wysokoscViewportu > elementy[i].offsetTop) {
          elementy[i].classList.remove('animacja-ikon-ukryty');
        }

      }

  })
})


$(document).ready(function () {
  
//zmniejszanie wysokosci menu po scrogolwaniu w dol
  $(window).scroll(function(){
  var scrollValue = $(window).scrollTop();
    if(scrollValue > 50){
    $('#menu').addClass("menu-dol ul");
    $('.menu-logo').addClass("menu-logo-dol");
    } else {
      $('#menu').removeClass("menu-dol ul");
      $('.menu-logo').removeClass("menu-logo-dol");
    }
  });
//wpisanie ciasteczka po kliknknieciu w diva
  $('#cookies').click(function () {
    setCookieValue();
    $(this).hide();

  });

//sprawdzanie czy ciasteczko zostalo wpisane
checkCookie(document.cookie);

//walidacja formularza
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