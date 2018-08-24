$(document).ready(function() {
    $("").css("content",$(this).attr("alt"));
});


// Open the Lightbox
function openLightbox() {

  $("#lightbox").css("top","0");
  $("#lightbox").css("left","0");
  document.getElementById('lightbox').style.display = "block";
}

// Close the Lightbox
function closeLightbox() {
  document.getElementById('lightbox').style.display = "none";
}
$(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
       closeLightbox();
    }
});

//Close lightbox when clicking the outside blur
$(".lightbox-container").click(function() {
  closeLightbox();
})
//Prevent above from happening when clicking inside elements
$(".lightbox-container div").click(function() {
  return false;
})

var slideIndex = 1;

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);

}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}



function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("lightbox-slides");
  var dots = document.getElementsByClassName("lightbox-image");
  var numbertext = document.getElementsByClassName("numbertext");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  $(".numbertext").text(slideIndex+" / "+slides.length);
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
