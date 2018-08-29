var scrollToTop = function() {
    $("html").animate({scrollTop: 0}, 800);
  };

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 20) {
    $('.scroll-top').fadeIn();
  } else {
    $('.scroll-top').fadeOut();
  }
});
