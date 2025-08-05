
const toggleBtn = document.getElementById('sound-toggle');
const music = document.getElementById('bg-music');
let isMuted = false;

toggleBtn.addEventListener('click', () => {
  isMuted = !isMuted;
  music.muted = isMuted;
  toggleBtn.style.opacity = isMuted ? 0.3 : 1;
});
