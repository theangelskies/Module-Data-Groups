let timeRemaining = 0;
let timerInterval = null;

function setAlarm() {
  // Clear any existing timer
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  // Get value from input (seconds)
  const input = document.getElementById("alarmSet").value;
  timeRemaining = parseInt(input, 10);

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
