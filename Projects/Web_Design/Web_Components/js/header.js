//Cookie Creation & Test

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

function checkCookie() {
    var username = getCookie("username");
    if (username != "") {
        alert("Welcome again " + username);
    } else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
    }
}

function themeCookie() {
        var theme = getCookie("theme-color");
        if (theme == "red") {
            $(".main").css("background","rgba(255,90,90,0.4)");
        } else if (theme == "green"){
          $(".main").css("background","rgba(90,255,90,0.4)");
        } else {
          $(".main").css("background","rgba(48,192,255,0.4)");
        }
      }

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

  //scrollToTop img bounce on click
  $(".scrollToTop").click(function() {
    $(".scrollToTop img").animate({top: '-=5px'},'fast');
    $(".scrollToTop img" ).animate({top: '+=5px'},'fast');
  });
});


$(function () {

    var top = 0,
        step = 55,
        viewport = $(window).height(),
        body = $.browser.webkit ? $('body') : $('html'),
        wheel = false;


    $('body').mousewheel(function(event, delta) {

        wheel = true;

        if (delta < 0) {

            top = (top+viewport) >= $(document).height() ? top : top+=step;

            body.stop().animate({scrollTop: top}, 400, function () {
                wheel = false;
            });
        } else {

            top = top <= 0 ? 0 : top-=step;

            body.stop().animate({scrollTop: top}, 400, function () {
                wheel = false;
            });
        }

        return false;
    });

    $(window).on('resize', function (e) {
        viewport = $(this).height();
    });
