// Typing Animation
const roles = ["Developer", "Video Editor"];
let roleIndex = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;
const roleElement = document.querySelector(".hero-text h2 span");

function typeEffect() {
    currentRole = roles[roleIndex];

    if (!isDeleting && charIndex <= currentRole.length) {
        roleElement.textContent = currentRole.substring(0, charIndex++);
    } else if (isDeleting && charIndex >= 0) {
        roleElement.textContent = currentRole.substring(0, charIndex--);
    }

    if (charIndex === currentRole.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, isDeleting ? 80 : 120);
}
typeEffect();

// Scroll-in Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

// Random Ratings
document.querySelectorAll('[data-rating]').forEach(starBox => {
    let rating = (Math.random() * (5 - 4.1) + 4.1).toFixed(1);
    let fullStars = Math.floor(rating);
    let halfStar = rating % 1 >= 0.5 ? 1 : 0;
    let starsHTML = "★".repeat(fullStars) + (halfStar ? "½" : "") + "☆".repeat(5 - fullStars - halfStar);
    starBox.innerHTML = `${rating} ${starsHTML}`;
});
