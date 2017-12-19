$('nav li ul').hide().removeClass('fallback');
$('nav > li').hover(
  function () {
    $('ul', this).stop().slideDown(1000);
  },
  function () {
    $('ul', this).stop().slideUp(1000);
  }
);

$(document).ready(function() {
  $('nav ul li ul a').hover(
    function() {
    $('nav ul li ul').show();
  },
  function() {
  $('nav ul li ul').hide();
});
});

$(document).ready(function() {
  $('#menu').hover(function() {
    $(this 'li').children().stop().slideDown(100);
},
function() {
    $(this 'li').children().stop().slideUp(100);
});
});

$(document).ready(function() {
  $('#TEST').hover(function() {
    $('#TEST2').stop().slideDown(100);
},
function() {
    $('#TEST2').stop().slideUp(100);
});
});
