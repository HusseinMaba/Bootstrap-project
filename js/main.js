  


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

function toggleElements(elementId) {
  const register = document.querySelector('.card-body-register');
  const login = document.querySelector('.card-body-login');

  if (elementId === 'register') {
      register.style.display = 'block';
      login.style.display = 'none';
  } else if (elementId === 'login') {
      register.style.display = 'none';
      login.style.display = 'block';
  }
}



