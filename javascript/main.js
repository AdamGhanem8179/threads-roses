const navBar = document.getElementById('navBar');
const modeBtn = document.getElementById('modeBtn');
let lastY = window.scrollY;


window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navBar.classList.add('hidden');
  } else {
    navBar.classList.remove('hidden');
  }
});


document.addEventListener('mousemove', (e) => {
  if (e.clientY <= 50 && window.scrollY > 100) {
    navBar.classList.add('visible');
  } else if (window.scrollY > 100) {
    navBar.classList.remove('visible');
  }
});


modeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  modeBtn.textContent = document.body.classList.contains('light')
    ? '🌙 Dark Mode'
    : '☀️ Light Mode';
});
