const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-track img');

let index = 0;

function moveCarousel() {
    index++;

    if (index >= slides.length) {
        index = 0;
    }

    track.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(moveCarousel, 2500);