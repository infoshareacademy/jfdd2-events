/**
 * Created by lukaszpotas on 09.03.16.
 */
function setCookieValue(){
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
            $('#ciastka').css('display', 'none');
        }
    });
}

$(document).ready(function() {
    $('#ciastka').click(function() {
        setCookieValue()
        $(this).css('display', 'none');
        });
    checkCookie(document.cookie);

});