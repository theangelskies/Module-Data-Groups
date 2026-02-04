const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

// Write your code here

let currentIndex = 0;
let slideshowInterval = null;

// Grab elements
const img = document.getElementById("carousel-img");
const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");
const autoForwardBtn = document.getElementById("auto-forward-btn");
const autoBackwardBtn = document.getElementById("auto-backward-btn");
const stopBtn = document.getElementById("stop-btn");

// Initial image
img.src = images[currentIndex];

// Helper functions
function updateImage() {
  img.src = images[currentIndex];
}

function disableAutoButtons() {
  autoForwardBtn.disabled = true;
  autoBackwardBtn.disabled = true;
}

function enableAutoButtons() {
  autoForwardBtn.disabled = false;
  autoBackwardBtn.disabled = false;
}

// Manual forward
forwardBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

// Manual backward
backwardBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

// Auto forward
autoForwardBtn.addEventListener("click", () => {
  clearInterval(slideshowInterval);
  disableAutoButtons();

  slideshowInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  }, 1000);
});

// Auto backward
autoBackwardBtn.addEventListener("click", () => {
  clearInterval(slideshowInterval);
  disableAutoButtons();

  slideshowInterval = setInterval(() => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  }, 1000);
});

// Stop slideshow
stopBtn.addEventListener("click", () => {
  clearInterval(slideshowInterval);
  enableAutoButtons();
});
