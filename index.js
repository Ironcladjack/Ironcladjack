// Cookie setter and getter

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteCookie(cname) {
  document.cookie = cname+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

$(*).click(function() {
  $(this).css("background","pink");
}, function() {
  $(this).css("background","");
});

$(".headerMenu li").hover(function() {
  $(this).css("background","rgba(255,255,255,0.1)");
}, function() {
  $(this).css("background","");
})

//scrollToTop controller
$(document).ready(function(){

  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 30) {
      $('.scrollToTop, .navBar').fadeIn();
    } else {
      $('.scrollToTop, .navBar').fadeOut();
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
