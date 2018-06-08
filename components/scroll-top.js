$(document).ready(function() {
  $(".scroll-top").css("display","none");
  $(".scroll-top").click(function() {
    $("html").animate({
        scrollTop: 0
      }, 800);
  });
});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('.scroll-top').fadeIn();
  } else {
    $('.scroll-top').fadeOut();
  }
});
