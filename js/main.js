  


let slideIndex = 0;
const slides = document.querySelectorAll('.mySlides');

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = 'block';
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

showSlides(); 












    document.addEventListener("DOMContentLoaded", function () {
        const signUpLink = document.querySelector(".dropdown-item[href='sign-up.html']");
        const signInLink = document.querySelector(".dropdown-item[href='sign-in.html']");

        signUpLink.addEventListener("click", function (event) {
            // Show sign-up form (you can implement this logic)
            event.preventDefault(); // Prevent default link behavior
        });

        signInLink.addEventListener("click", function (event) {
            // Show sign-in form (you can implement this logic)
            event.preventDefault(); // Prevent default link behavior
        });
    });




    // $(document).ready(function () {
    //     $('#carousel1').carousel();
    //     $('#carousel2').carousel();
    // });