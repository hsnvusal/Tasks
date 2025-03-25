let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");
const indicators = document.querySelectorAll(".carousel-indicators li");

function showSlide(index) {
    items.forEach((item, i) => {
        item.classList.remove("active");
        indicators[i].classList.remove("active");
    });

    items[index].classList.add("active");
    indicators[index].classList.add("active");
    currentIndex = index;
}

function prevSlide() {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) newIndex = items.length - 1;
    showSlide(newIndex);
}

function nextSlide() {
    let newIndex = (currentIndex + 1) % items.length;
    showSlide(newIndex);
}

function goToSlide(index) {
    showSlide(index);
}

// Otomatik geçiş (opsiyonel)
setInterval(nextSlide, 3000);