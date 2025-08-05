// Random ratings between 4.1 and 5
document.querySelectorAll('[data-rating]').forEach(starBox => {
    let rating = (Math.random() * (5 - 4.1) + 4.1).toFixed(1);
    let fullStars = Math.floor(rating);
    let halfStar = rating % 1 >= 0.5 ? 1 : 0;
    let starsHTML = '★'.repeat(fullStars) + (halfStar ? '½' : '') + '☆'.repeat(5 - fullStars - halfStar);
    starBox.innerHTML = `${rating} ${starsHTML}`;
});
