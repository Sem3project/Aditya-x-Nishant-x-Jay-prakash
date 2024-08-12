let currentIndex = 0;
const slides = document.querySelectorAll('.slides > div');
const totalSlides = slides.length;

function showSlide(index) {
    // Ensure the index is within the bounds
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    // Move the slides
    const offset = -currentIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

// Function to move to the next or previous slide
function moveSlide(step) {
    showSlide(currentIndex + step);
}

// Initialize the first slide
showSlide(currentIndex);

// Optional: Auto-slide functionality
setInterval(() => {
    moveSlide(1);
}, 5000); // Change every 5 seconds
