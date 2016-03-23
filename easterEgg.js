////********************************************************//
////         funkcja rysujaca tabele                        //
////********************************************************//
////zmienic w ten sposób ze jako argument funkcji podaje sie liczbe dni
//function createCalendarBoard(sizex, sizey, lastRow){
//
//  var $table = $('<table>');
//
//  for(var y=0; y < sizey; y++){
//    var $tr = $('<tr>');
//    for(var x=0; x < sizex; x++){
//      if(y === 4){sizex = lastRow;}
//      var $td = $('<td>');
//
//      $td.addClass('cellProperties');
//
//      $tr.append($td);
//
//    }
//    $table.append($tr);
//  }
//  return $table;
//}
//
////********************************************************//
////       algorytm pojawiania się eventów                  //
////********************************************************//
//
//
//function showEventWithVariableTime(timeoutValue) {
//  console.log(timeoutValue);
//// zaczynamy od setTimeouta który wywoływany jest ze zmiennym opoznieniem
////opoznienie zalezy od ilosci elementów z klasą event znajdującą sie na planszy
//  var timeoutID = setTimeout(function timeout() {
//
////tworzona tablica z elementami bez klasy eventCells
//    var $emptyCells = $('td:not(.eventCells)');
//    var numberOfEmptyCells = $emptyCells.length;
//
////tworzona tablica z elementami z klasą eventCells
//    var $eventCells = $('td.eventCells');
//    var numberOfEventCells = $eventCells.length;
//
////mechanizm losowania ktory decyduje ktorej komorce zmienic klase
//    var randomFloat = Math.random() * numberOfEmptyCells;
//    var randomNumberOfCell = Math.floor(randomFloat);
//
////zmiana klasy dla wylosowanego elementu
//    $emptyCells.eq(randomNumberOfCell).addClass('eventCells');
//
////zdefiniowana tablica do zmiany opoznien wywolania funkcji
//    var timeoutValuesArr = [800, 750, 700, 650, 600, 550, 500, 450, 400, 350];
//    timeoutValue = timeoutValuesArr[numberOfEventCells];
//
////anulacja funkcji settimeout
//    clearTimeout(timeoutID);
//
////dopoki opoznienie nie jest rowne 350 ms to wywołuj na nowo funkcje
////podchodzi juz trochę pod algorytm konca gry ale musiałem to zdefiniowac
//    if(timeoutValue !== 350){
//      showEventWithVariableTime(timeoutValue);
//    }else {
//    }
//  }, timeoutValue)
//}
//
//
//
//
//$(document).ready(function () {
//
//  $('#calendarBoard').hide();
//
//  $('.menu-logo').click(function(){
//    $('#calendarBoard').show().addClass('calendarBoardOn');
//
//  var sizey = 5;
//  var sizex = 7;
//  var lastRow = 3;
//  $('.calendarBoardOn').empty().append(createCalendarBoard(sizex, sizey, lastRow));
//
////wstepne opoznienie po rozpoczeciu gry
//  var timeoutValue = 1000;
//  showEventWithVariableTime(timeoutValue);
//
////zmiana usuniecie klasy eventsCells po kliknieciu na komorke
//    $('td').click(function(){
//      $(this).removeClass('eventCells');
//    });
//    $('.sekcja-zajawka').click(function(){
//      $('#calendarBoard').hide();
//    });
//
//});
//  checkForEndGame();
//
//
//});
//
//function checkForEndGame() {
//  var activeEvents = $('td.eventCells');
//
//  if (activeEvents.length == 0){
//    alert('Wygrałeś !!! Gratulacje');
//    console.log('player wins!');
//
//  } else if (activeEvents.length >= 10) {
//    alert('Przegrałeś!!!');
//    console.log('computer wins =(');
//
//  }
//}


//********************************************************//
//         funkcja rysujaca tabele                        //
//********************************************************//
//zmienic w ten sposób ze jako argument funkcji podaje sie liczbe dni
function createCalendarBoard(sizex, sizey, lastRow) {

  var $table = $('<table>');

  for (var y = 0; y < sizey; y++) {
    var $tr = $('<tr>');
    for (var x = 0; x < sizex; x++) {
      if (y === 4) {
        sizex = lastRow;
      }
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
  //console.log(timeoutValue);
// zaczynamy od setTimeouta który wywoływany jest ze zmiennym opoznieniem
//opoznienie zalezy od ilosci elementów z klasą event znajdującą sie na planszy
  var timeoutID = setTimeout(function timeout() {

//tworzona tablica z elementami bez klasy eventCells
    var $emptyCells = $('td:not(.eventCells)');
    var numberOfEmptyCells = $emptyCells.length;

//tworzona tablica z elementami z klasą eventCells
    var $eventCells = $('td.eventCells');
    var numberOfEventCells = $eventCells.length;

//mechanizm losowania ktory decyduje ktorej komorce zmienic klase
    var randomFloat = Math.random() * numberOfEmptyCells;
    var randomNumberOfCell = Math.floor(randomFloat);

//zmiana klasy dla wylosowanego elementu
    $emptyCells.eq(randomNumberOfCell).addClass('eventCells');

//zdefiniowana tablica do zmiany opoznien wywolania funkcji
    var timeoutValuesArr = [800, 750, 700, 650, 600, 550, 500, 450, 400, 350];
    timeoutValue = timeoutValuesArr[numberOfEventCells];

//anulacja funkcji settimeout
    clearTimeout(timeoutID);

//dopoki opoznienie nie jest rowne 350 ms to wywołuj na nowo funkcje
//podchodzi juz trochę pod algorytm konca gry ale musiałem to zdefiniowac
    if (timeoutValue !== 350) {
      showEventWithVariableTime(timeoutValue);
    } else {
      //console.log('computer wins - show proper message');
    }

    checkForEndGame();

  }, timeoutValue)
}


$(document).ready(function () {
  $('#calendarBoard').hide();

  $('.menu-logo').click(function () {
    $('#calendarBoard').show().addClass('calendarBoardOn');

    var sizey = 5;
    var sizex = 7;
    var lastRow = 3;
    $('.calendarBoardOn').empty().append(createCalendarBoard(sizex, sizey, lastRow));

//wstepne opoznienie po rozpoczeciu gry
    var timeoutValue = 1000;
    showEventWithVariableTime(timeoutValue);

//zmiana usuniecie klasy eventsCells po kliknieciu na komorke
    $('td').click(function () {
      $(this).removeClass('eventCells');
      checkForEndGame();
    });
        $('.sekcja-zajawka').click(function(){
      $('#calendarBoard').hide();


    });


  });
});

//algorytm konca gry

function checkForEndGame() {
  var activeEvents = $('td.eventCells');

  if (activeEvents.length == 0){
    alert('Wygrałeś !!! Gratulacje');
    console.log('player wins!');

  } else if (activeEvents.length >= 10) {
    alert('Przegrałeś!!!');
    console.log('computer wins =(');

  }
}