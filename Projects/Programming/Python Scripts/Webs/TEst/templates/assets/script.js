//scrollToTop controller
$(document).ready(function(){

  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });

  //Click event to scroll to top
  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},400);
    return false;
  });

});

//scrollToTop img bounce
$(document).ready(function(){
  $(".scrollToTop").click(function() {
    $(".scrollToTop img").animate({top: '-=5px'},'fast');
    $(".scrollToTop img" ).animate({top: '+=5px'},'fast');
  });
});

//This controls the footer shrinking and growing on click
$(document).ready(function() {
  $(".dropFoot").css("display","none");
  $(".footer").css("max-height","50px");
  $(".copyref").css("height","50px");
  $(".bottomwrap, .push").css("height","50px");
  $(".wrapper > .mainwrap").css("margin-bottom","-50px");
});

$(document).ready(function(){
  $(".copyref").click(function() {
    $(".dropFoot").css("display","block");
    $(".footer").css("max-height","200px");
    $(".bottomwrap, .push").css("height","200px");
    $(".wrapper > .mainwrap").css("margin-bottom","-200px");
    $(".copyref").css("height","50px");
  });
});

$(document).ready(function() {
  $(".main").click(function() {
    $(".dropFoot").css("display","none");
    $(".footer").css("max-height","50px");
    $(".copyref").css("height","50px");
    $(".bottomwrap, .push").css("height","50px");
    $(".wrapper > .mainwrap").css("margin-bottom","-50px");
  });
});

//Changes Favicon when page is active
$(document).ready(function() {
  $("*").ready(function() {
    $("#favicon").attr("href","PiHole.png");
    $("#favicon").attr("tpye","image/png");
  },
    function() {
    $("#favicon").attr("href","gif2.gif");
    $("#favicon").attr("type","image/gif");
  });
});
