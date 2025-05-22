const audio = document.getElementById("custom-audio");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const nextBtn = document.getElementById("next-btn");
const volumeSlider = document.getElementById("volume-slider");
const trackTitle = document.getElementById("track-title");

const playlistItems = document.querySelectorAll(".playlist-item");
let playlist = Array.from(playlistItems).map(item => item.getAttribute("data-src"));
let trackNames = Array.from(playlistItems).map(item => item.textContent);
let currentTrack = 0;

function loadTrack(index) {
    audio.src = playlist[index];
    trackTitle.textContent = `Track: ${trackNames[index]}`;
    audio.play();
}

playBtn.addEventListener("click", () => {
    if (!audio.src) loadTrack(currentTrack);
    else audio.play();
});

pauseBtn.addEventListener("click", () => audio.pause());

nextBtn.addEventListener("click", () => {
    currentTrack = (currentTrack + 1) % playlist.length;
    loadTrack(currentTrack);
});

volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
});

playlistItems.forEach((item, index) => {
        item.addEventListener("click", () => {
        currentTrack = index;
        loadTrack(currentTrack);
    });
});

// Drag behavior
const card = document.getElementById("music-player-card");
let isDragging = false;
let offsetX, offsetY;

card.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - card.getBoundingClientRect().left;
    offsetY = e.clientY - card.getBoundingClientRect().top;
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      card.style.left = `${e.clientX - offsetX}px`;
      card.style.top = `${e.clientY - offsetY}px`;
    }
});