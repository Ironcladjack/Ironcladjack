//This file works simply, add the class "lightbox-target" to a div directly containing some <img> elements, and this document will 'after' a lightbox modal to the div.
//Requires an accompanying .css file for styling.

$(document).ready(function() {

});


let lightboxIndex = 0; //Which lightbox currently selected
let slideIndex = 0; //Which slide currently selected
let lightboxSlides = 0; //number of slides in currently selected lightbox


// Open the Lightbox
function openLightbox(index, slide) {
  lightboxIndex = index;

  //check 'slide' variable given, if yes, display that slide, else display the first slide.
  slideIndex = slide > 0 ? slide : 0;

  //Get number of slides in selected lightbox, update global variable
  lightboxSlides = $(".lightbox-container:eq("+index+")").find(".lightbox-slides").length-1;



  //Display lightbox based on index assigned at creation
  $(".lightbox-container").css("display","none");
  $(".lightbox-container:eq("+index+")").css("display","block");
  showSlides(slideIndex);
}

// Close all lightboxes by turning off display.
function closeLightbox() {
    $(".lightbox-container").css("display","none");
}
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {// up arrow
    }
    else if (e.keyCode == '40') {// down arrow
    }
    else if (e.keyCode == '37') {//left arrow
      plusSlides(-1)
    }
    else if (e.keyCode == '39') {// right arrow
      plusSlides(1)
    }
    else if (e.keyCode == '27') {// escape key
      closeLightbox();
    }

}


showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  if ( !(slideIndex + n > lightboxSlides) && !(slideIndex + n < 0) ) { //If going forward/back is not outside the bounds of images available, +/- slide
  showSlides(slideIndex += n);
  console.log(slideIndex);
  }
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}



function showSlides(index) {
  //Update 'Caption' lightbox header - selects the correct caption box to modify, selects the correct image to pull 'alt' from, updates 'caption'
  $(".lightbox-container:eq("+lightboxIndex+")").find(".caption").text( $(".lightbox-container:eq("+lightboxIndex+")").find(".lightbox-slides:eq("+index+") img").attr("alt"));

  //hides all slides, unhides the correct slide from the correct lightbox.
  $(".lightbox-slides").css("display","none");
  $(".lightbox-container:eq("+lightboxIndex+")").find(".lightbox-slides:eq("+index+")").css("display","block");
}
