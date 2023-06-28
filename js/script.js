window.addEventListener('DOMContentLoaded', (event) => {
    const audio = document.getElementById('myAudio');
    audio.volume = 1;
    audio.muted = false;
});

new Swiper('.slider', {
    // direction: 'vertical',
    speed: 2400,
    mousewheel: {
        enabled: true,
        sensitivity: 2.4
    },
    spaceBetween: 18,
    parallax: true,
    // freeMode: true
})