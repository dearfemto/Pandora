function toggleSubSlides(slideId) {
    const subSlides = document.querySelectorAll(`.sub-slide-${slideId}`);
    subSlides.forEach(subSlide => {
        subSlide.style.display = subSlide.style.display === 'block' ? 'none' : 'block';
    });
}

function toggleAudio() {
    const audio = document.getElementById("myAudio");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function setVolume(value) {
    const audio = document.getElementById("myAudio");
    audio.volume = value;
}