// Typing Animation
const words = ["Developer", "Video Editor"];
let i = 0, j = 0, currentWord = "", isDeleting = false;
const textElement = document.getElementById("changing-text");

function type() {
  currentWord = words[i];
  let displayText = isDeleting
    ? currentWord.substring(0, j--)
    : currentWord.substring(0, j++);

  textElement.textContent = displayText;

  if (!isDeleting && j === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
    setTimeout(type, 300);
  } else {
    setTimeout(type, isDeleting ? 60 : 100);
  }
}
type();

// Scroll-in Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.section-animate, .fade-in-zoom').forEach(el => observer.observe(el));

// Back to Top
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Custom Cursor
const cursor = document.getElementById('customCursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// Loading Screen
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById("loading-screen");
  setTimeout(() => {
    loadingScreen.style.display = "none";
  }, 1000);
});
