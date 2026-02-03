const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
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
