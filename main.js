$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
/* TABELKA NARYSOWANA 16.03.16 */


function tableCreate() {
  var body = document.body,
    tbl = document.createElement('table');
  tbl.style.width = '800px';
  tbl.style.height = '450px';
  tbl.style.border = '1px solid black';
  tbl.style.position = 'absolute';
  tbl.style.left = '100px';
  tbl.style.zIndex = '9999';
  tbl.style.top = '400px';

  for (var i = 0; i < 5; i++) {
    var tr = tbl.insertRow();
    for (var j = 0; j < 7; j++) {
      if (i === 4 && j > 2) {
        break;
      }
      var td = tr.insertCell();
      td.appendChild(document.createTextNode('Cell'));
      td.style.border = '1px solid black';
    }
  }
  body.appendChild(tbl);
}
tableCreate();


/* Created by lukaszpotas on 09.03.16.
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


  $('#cookies').click(function () {
    setCookieValue()
    $(this).hide();

  });
  checkCookie(document.cookie);

  $("#formularz").submit(function () {

    var valid = 0;
    $(this).find('input[type=email], input[type=tel]').each(function () {
      if ($(this).val() != "") valid = 1;
    });

    if (valid) {
      return true;
    }
    else {
      alert("Wymagamy podania przynajmniej jednego pola");
      return false;
    }
  });
});