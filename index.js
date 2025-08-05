
const menuToggle = document.getElementById('menu-toggle');
const slideMenu = document.getElementById('slide-menu');
const soundToggle = document.getElementById('sound-toggle');
const bgMusic = document.getElementById('bg-music');

let menuOpen = false;
menuToggle.addEventListener('click', () => {
  menuOpen = !menuOpen;
  slideMenu.style.right = menuOpen ? '0' : '-300px';
});

let isMuted = false;
soundToggle.addEventListener('click', () => {
  isMuted = !isMuted;
  bgMusic.muted = isMuted;
  soundToggle.style.opacity = isMuted ? 0.3 : 1;
});

// Cerrar menú al hacer clic fuera
document.addEventListener('click', (e) => {
  if (menuOpen && !slideMenu.contains(e.target) && e.target !== menuToggle) {
    slideMenu.style.right = '-300px';
    menuOpen = false;
  }
});
