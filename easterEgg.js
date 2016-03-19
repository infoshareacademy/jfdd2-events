//********************************************************//
//         funkcja rysujaca tabele                        //
//********************************************************//
//zmienic w ten sposób ze jako argument funkcji podaje sie liczbe dni
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

//********************************************************//
//       algorytm pojawiania się eventów                  //
//********************************************************//


function showEventWithVariableTime(timeoutValue) {
  var prevEventCells = 0;
  var timeoutID = setTimeout(function timeout() {

    var $emptyCells = $('td:not(.eventCells)');
//
//debugger;
//
//    prevEventCells = currentEventCells;


    console.log('poprzednie event cells ' + prevEventCells);
    var currentEventCells = $('td.eventCells');
    var numberOfEmptyCells = $emptyCells.length;
    console.log(numberOfEmptyCells);
    var numberOfEventCells = currentEventCells.length;
    console.log('aktualne event cells' + numberOfEventCells);
    var randomFloat = Math.random() * numberOfEmptyCells;
    var randomNumberOfCell = Math.round(randomFloat) ;
    $emptyCells.eq(randomNumberOfCell).addClass('eventCells');
    timeoutValue -= 100;
    clearTimeout(timeoutID);

    if(timeoutValue !== 100){
      showEventWithVariableTime(timeoutValue);
    }else {
      console.log('Game Over');
    }

  }, timeoutValue)
}




$(document).ready(function () {
  $('.menu-logo').click(function(){
    $('#calendarBoard').toggleClass('calendarBoardOn');
  var sizey = 5;
  var sizex = 7;
  var lastRow = 3;
  $('.calendarBoardOn').empty().append(createCalendarBoard(sizex, sizey, lastRow));

  var timeoutValue = 1300;
  showEventWithVariableTime(timeoutValue);


});
});