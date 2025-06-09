// Hamburger menu toggle
function toggleMenu() {
  const nav = document.getElementById('nav-links');
  if (nav) {
    nav.classList.toggle('active');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  // Expose toggleMenu to global so inline onclick works
  window.toggleMenu = toggleMenu;

  // Optional: Run slider logic only on index.html
  const slides = document.querySelectorAll('.slide');
  if (slides.length > 0) {
    let current = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
      });
    }

    function nextSlide() {
      current = (current + 1) % slides.length;
      showSlide(current);
    }

    function prevSlide() {
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
    }

    showSlide(current);
    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;
  }
});