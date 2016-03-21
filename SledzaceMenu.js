var timerid; //Used to fire scroll function once after scrolling is done.
$(document).ready(function(){
    $("#menu a").click(function(e){
        e.preventDefault();
        $("#menu a").removeClass('active1');
        var id = $(this).attr("href").substring(1);
        $("body").animate({
            'scrollTop': $("section#" + id).offset().top
        });
    });
    $("body").scrollTop(1); //forcing window scroll to execute on page load
    $(window).scroll(function(){
        clearTimeout(timerid);
        timerid = setTimeout(checkactivelink, 50);
    });

    function checkactivelink()
    {
        $("section").each(function(){
            if($("body").scrollTop() >= $(this).offset().top)
            {
                $("#menu a").removeClass('active1');
                $("#menu a[href=#" + $(this).attr("id") + "]").addClass('active1');
            }
        });
    }
});