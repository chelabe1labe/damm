// Typing animation
const roles = ["Developer", "Video Editor"];
let part = '';
let i = 0;
let offset = 0;
let forwards = true;
const speed = 150;
const pause = 2000;
const typewriterElement = document.getElementById('typewriter');

// Sounds
const typeSound = new Audio("https://assets.mixkit.co/active_storage/sfx/1715/1715-preview.mp3");
const deleteSound = new Audio("https://assets.mixkit.co/active_storage/sfx/1669/1669-preview.mp3");
let soundEnabled = true;

document.getElementById("mute-toggle").addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    document.getElementById("mute-toggle").textContent = soundEnabled ? "🔊 Sound On" : "🔇 Sound Off";
});

function typeEffect() {
    if (forwards) {
        if (offset < roles[i].length) {
            part = roles[i].substring(0, offset + 1);
            offset++;
            typewriterElement.textContent = part;
            if (soundEnabled) {
                typeSound.currentTime = 0;
                typeSound.play();
            }
            setTimeout(typeEffect, speed);
        } else {
            forwards = false;
            setTimeout(typeEffect, pause);
        }
    } else {
        if (offset > 0) {
            part = roles[i].substring(0, offset - 1);
            offset--;
            typewriterElement.textContent = part;
            if (soundEnabled) {
                deleteSound.currentTime = 0;
                deleteSound.play();
            }
            setTimeout(typeEffect, speed / 1.5);
        } else {
            forwards = true;
            i = (i + 1) % roles.length;
            setTimeout(typeEffect, speed);
        }
    }
}
typeEffect();

// Star Ratings
document.querySelectorAll('[data-rating]').forEach(starBox => {
    let rating = (Math.random() * (5 - 4.1) + 4.1).toFixed(1);
    let fullStars = Math.floor(rating);
    let halfStar = rating % 1 >= 0.5 ? 1 : 0;
    let starsHTML = '★'.repeat(fullStars) + (halfStar ? '½' : '') + '☆'.repeat(5 - fullStars - halfStar);
    starBox.innerHTML = `${rating} ${starsHTML}`;
});

// Custom Cursor
const cursor = document.getElementById('customCursor');
document.addEventListener('mousemove', e => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Scroll Reveal Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});
document.querySelectorAll('.fade-in-zoom, .section-animate').forEach(el => observer.observe(el));

// Back to Top Button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Remove loader on page load
window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});
