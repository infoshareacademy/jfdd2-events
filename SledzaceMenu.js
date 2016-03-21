
$(window).scroll(function(){
var scrollValue = $(window).scrollTop();
console.log(scrollValue);
  var funkcjeValue = $(".funkcje").offset().top;
  if(scrollValue > 950){
    $("#funkcje").addClass('active1');

  }else
    $("#funkcje").removeClass('active1');
  console.log(funkcjeValue);
})