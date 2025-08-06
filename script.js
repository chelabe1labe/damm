// Typing effect: Developer <-> Video Editor
const roles = ["Developer", "Video Editor"];
let roleIndex = 0;
let charIndex = 0;
const typewriterElement = document.getElementById("changing-text");

function type() {
  if (charIndex <= roles[roleIndex].length) {
    typewriterElement.textContent = roles[roleIndex].substring(0, charIndex);
    charIndex++;
    setTimeout(type, 150);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex >= 0) {
    typewriterElement.textContent = roles[roleIndex].substring(0, charIndex);
    charIndex--;
    setTimeout(erase, 100);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});

// Star Ratings (random between 4.1 and 5)
document.querySelectorAll("[data-rating]").forEach((starBox) => {
  let rating = (Math.random() * (5 - 4.1) + 4.1).toFixed(1);
  let fullStars = Math.floor(rating);
  let halfStar = rating % 1 >= 0.5 ? 1 : 0;
  let starsHTML =
    "★".repeat(fullStars) +
    (halfStar ? "½" : "") +
    "☆".repeat(5 - fullStars - halfStar);
  starBox.innerHTML = `${rating} ${starsHTML}`;
});

// Scroll Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});
document
  .querySelectorAll(".fade-in-zoom, .section-animate")
  .forEach((el) => observer.observe(el));

// Back to Top Button
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Custom Cursor
const cursor = document.getElementById("customCursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// Loading Screen
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});
