// Random ratings between 4.1 and 5
document.querySelectorAll('[data-rating]').forEach(starBox => {
    let rating = (Math.random() * (5 - 4.1) + 4.1).toFixed(1);
    let fullStars = Math.floor(rating);
    let halfStar = rating % 1 >= 0.5 ? 1 : 0;
    let starsHTML = '★'.repeat(fullStars) + (halfStar ? '½' : '') + '☆'.repeat(5 - fullStars - halfStar);
    starBox.innerHTML = `${rating} ${starsHTML}`;
});

// Changing text effect
const roles = ["Developer", "Video Editor"];
let roleIndex = 0;
const changingText = document.getElementById("changing-text");

setInterval(() => {
    changingText.style.opacity = 0; // fade out
    setTimeout(() => {
        roleIndex = (roleIndex + 1) % roles.length;
        changingText.textContent = roles[roleIndex];
        changingText.style.opacity = 1; // fade in
    }, 500);
}, 3000);
