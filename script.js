const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

// Change navbar on scroll
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);

  // Scrollspy effect
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  menuToggle.classList.toggle('active');
});
