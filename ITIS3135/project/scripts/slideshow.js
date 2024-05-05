let currentSlide = 0;
const slides = document.querySelectorAll('#slideshow-container iframe');
const totalSlides = slides.length;

function showSlide(slideIndex) {
    if (slideIndex < 0) {
        currentSlide = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
        currentSlide = 0;
    } else {
        currentSlide = slideIndex;
    }

    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function previousSlide() {
    showSlide(currentSlide - 1);
}

document.getElementById('prev-slide').addEventListener('click', previousSlide);
document.getElementById('next-slide').addEventListener('click', nextSlide);

showSlide(currentSlide);
