
let navbar = document.getElementById('navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    navbar.classList.add('hidden');
  } else {
    navbar.classList.remove('hidden');
  }
});

document.addEventListener('mousemove', function(e) {
  if (e.clientY <= 50 && window.scrollY > 100) {
    navbar.classList.add('visible');
  } else if (window.scrollY > 100) {
    navbar.classList.remove('visible');
  }
});


const modeToggle = document.getElementById('modeToggle');

modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  modeToggle.textContent = document.body.classList.contains('light-mode')
    ? '🌙 Dark Mode'
    : '☀️ Light Mode';
});
