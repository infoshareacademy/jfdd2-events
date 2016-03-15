function tableCreate() {
  var body = document.body,
  tbl = document.createElement('table');
  tbl.style.width = '1000px';
  tbl.style.border = '1px solid black';

  for(var i = 0; i < 5; i++){
    var tr = tbl.insertRow();
    for(var j = 0; j < 7; j++){
        if(i === 5)
        for(j = 0; j < 3; j++){
        }
      else {
          var td = tr.insertCell();
          td.appendChild(document.createTextNode('Cell'));
          td.style.border = '1px solid black';
          if(i == 1 && j == 1);
        }
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