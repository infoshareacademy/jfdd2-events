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
  timeoutID = setTimeout(function timeout() {

//tworzona tablica z elementami bez klasy eventCells
    var $emptyCells = $('td:not(.eventCells)');
    var numberOfEmptyCells = $emptyCells.length;

//tworzona tablica z elementami z klasą eventCells
    var $eventCells = $('td.eventCells');
    var numberOfEventCells = $eventCells.length;

//mechanizm losowania ktory decyduje ktorej komorce zmienic klase
    var randomFloat = Math.random() * numberOfEmptyCells;
    var randomNumberOfCell = Math.floor(randomFloat);

    var imageUrl =
      ['./images/easter-egg/icon-bike.png', './images/easter-egg/icon-building.png', './images/easter-egg/icon-cinema.png', './images/easter-egg/icon-cinema2.png', './images/easter-egg/icon-football.png', './images/easter-egg/icon-museum.png',
 './images/easter-egg/icon-party.png', './images/easter-egg/icon-player.png', './images/easter-egg/icon-theatre.png', './images/easter-egg/icon-vacation.png' ];

    var randomFloatForImageNumber = Math.random() * imageUrl.length;
    var randomImageNumber = Math.floor(randomFloatForImageNumber);



//zmiana klasy dla wylosowanego elementu
    $emptyCells.eq(randomNumberOfCell).addClass('eventCells').css('background-image', 'url(' + imageUrl[randomImageNumber] + ')');


//zdefiniowana tablica do zmiany opoznien wywolania funkcji
    var timeoutValuesArr = [700, 700, 700, 650, 600, 550, 500, 450, 400, 350];
    timeoutValue = timeoutValuesArr[numberOfEventCells];

//anulacja funkcji settimeout
    clearTimeout(timeoutID);

//dopoki opoznienie nie jest rowne 350 ms to wywołuj na nowo funkcje
//podchodzi juz trochę pod algorytm konca gry ale musiałem to zdefiniowac
    if (numberOfEventCells != 10) {
      showEventWithVariableTime(timeoutValue);
    } else {


    };

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
    var score = 0;
    var timeoutID;

    $('.game').empty().append(createCalendarBoard(sizex, sizey, lastRow));

    $('#score').append(score);
//wstepne opoznienie po rozpoczeciu gry
    var timeoutValue = 1000;
    showEventWithVariableTime(timeoutValue);

//zmiana usuniecie klasy eventsCells po kliknieciu na komorke
    $('td').click(function () {
      if($(this).hasClass('eventCells')){
        score++;
      }
      $(this).removeClass('eventCells').css('background-image', 'none');



      $('#score').html('Ilosc punktow: ' + score);

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
  console.log(activeEvents.length);

  if (activeEvents.length == 0){
    $('#game-over').append('<a>', 'Brawo! Wygrałeś!');
    clearTimeout(timeoutID);

  } else if (activeEvents.length >= 10) {
    $('#game-over').append('<a>', 'Przegrałeś!');
    clearTimeout(timeoutID);
  }
}