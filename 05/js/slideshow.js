// code from: https://www.w3schools.com/howto/howto_js_slideshow.asp
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".mySlides");
    slides = Array.from(slides);
    slides.map((item) => item.style.display = "none");
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 1500); // Change image every 1.5 seconds
}