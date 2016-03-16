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




//document.addEventListener("scroll",function(){
//  var elementTestowy = document.getElementById('test-pokazywania');
//  var odlegloscElementuOdPoczatkuDokumentu = elementTestowy.offsetTop;
//
//
//  var wysokoscPrzescrollowanegoDokumentu = window.pageYOffset;
//  var wysokoscOknaDlaDokumentu = window.innerHeight;
//
//  console.log("offsetdokumentu " + wysokoscPrzescrollowanegoDokumentu );
//  console.log("ysokoscokna " + wysokoscOknaDlaDokumentu);
//  console.log("polozenieElementu " + odlegloscElementuOdPoczatkuDokumentu);
//
//
//  if (odlegloscElementuOdPoczatkuDokumentu < wysokoscOknaDlaDokumentu + wysokoscPrzescrollowanegoDokumentu) {
//    console.log('WIDAC')
//    elementTestowy.classList.remove('test-pokazywania-ukryty');
//  } else {
//    console.log('NIE WIDAC')
//  }
//
//});

var elementy = document.getElementsByClassName('test-pokazywania');

document.addEventListener("scroll",function() {

  //var odlegloscElementuOdPoczatkuDokumentu = elementTestowy.offsetTop;

  var wysokoscPrzescrollowanegoDokumentu = window.pageYOffset;
  var wysokoscOknaDlaDokumentu = window.innerHeight;

  for (var i=0; i<elementy.length; i++) {

    if (elementy[i].offsetTop < wysokoscOknaDlaDokumentu + wysokoscPrzescrollowanegoDokumentu) {
      elementy[i].classList.remove('test-pokazywania-ukryty');
    } else {
    }
  }




});


//
//
//
//
//$(document).ready(function () {
//
//
//  $('#cookies').click(function () {
//    setCookieValue()
//    $(this).hide();
//
//  });
//  checkCookie(document.cookie);
//
//  $("#formularz").submit(function () {
//
//    var valid = 0;
//    $(this).find('input[type=email], input[type=tel]').each(function () {
//      if ($(this).val() !== ""){
//          valid = 1;
//      }
//    });
//
//    if (valid>0) {
//      return true;
//    }
//    else {
//      alert("Wymagamy podania przynajmniej jednego pola");
//      return false;
//    }
//  });
//
//
//
//
//});