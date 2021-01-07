let slidIndex =1;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");




// Next/previous controls
function plusSlides(num) {
  showSlides(slideIndex += num);
}

// Thumbnail image controls
function currentSlide(num) {
  showSlides(slideIndex = num);
}
function showSlide(num){
 if(num  > slides.length){
   slidIndex =1;
 }
 if(num < 1){
  slidIndex =slides.length;
} 
for( let i =0 ;  i<slides.length; i++){
  slides[i].style.display ="none";
}
for ( let i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";


}

  