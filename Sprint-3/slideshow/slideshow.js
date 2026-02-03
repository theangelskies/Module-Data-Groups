const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
  "./assets/cat4.jpg",
  "./assets/cat5.jpg",
];

// Write your code here

let currentIndex = 0;

// Grab elements
const img = document.getElementById("carousel-img");
const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");

// Show image based on index
function updateImage() {
  img.src = images[currentIndex];
}

// Forward button
forwardBtn.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0; // loop back to start
  }

  updateImage();
});

// Backward button
backwardBtn.addEventListener("click", () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = images.length - 1; // go to last image
  }

  updateImage();
});
