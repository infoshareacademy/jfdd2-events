
function createCalendarBoard(sizex, sizey, lastRow){

  var $table = $('<table>');

  for(var y=0; y < sizey; y++){
    var $tr = $('<tr>');
    for(var x=0; x < sizex; x++){
      if(y === 4){sizex = lastRow;}
      var $td = $('<td>');

      $td.addClass('cellProperties');

      $tr.append($td);

    }
    $table.append($tr);
  }
  return $table;
}
$(document).ready(function () {
  $('.menu-logo').click(function(){
    $('#calendarBoard').toggleClass('calendarBoardOn');
  var sizey = 5;
  var sizex = 7;
  var lastRow = 3;
  $('.calendarBoardOn').empty().append(createCalendarBoard(sizex, sizey, lastRow));
});
});