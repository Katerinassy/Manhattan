const carousel = document.querySelector('.block__2__inner');
const slides = document.querySelector('.slides');
const prevBtn = carousel.querySelector('.prev');
const nextBtn = carousel.querySelector('.next');

let currentSlide = 0;
const maxSlides = slides.children.length;

prevBtn.addEventListener('click', function() {
  currentSlide = (currentSlide - 1 + maxSlides) % maxSlides;
  slides.style.transform = `translateX(-${currentSlide * 600}px)`;
});

nextBtn.addEventListener('click', function() {
  currentSlide = (currentSlide + 1) % maxSlides;
  slides.style.transform = `translateX(-${currentSlide * 600}px)`;
});

// Automate the slideshow
// let timer = setInterval(function() {
//   nextBtn.click();
// }, 4000);








// accordion


$(document).ready(function() {
  $('.acc-active').click(function () {
      $(this).toggleClass('active');
      $(this).prev('.tab-content').slideToggle(600);
  });
});




