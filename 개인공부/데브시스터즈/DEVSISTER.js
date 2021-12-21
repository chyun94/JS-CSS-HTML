// drop menu
// mouse
const mouse_cuser = document.querySelector(".mouse_cuser");

        document.addEventListener("mousemove", (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            // console.log(e.clientX);
            // console.log(e.clientY);
            mouse_cuser.style.left = mouseX + "px";
            mouse_cuser.style.top = mouseY + "px";
        });
// slide
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += "active";
}

