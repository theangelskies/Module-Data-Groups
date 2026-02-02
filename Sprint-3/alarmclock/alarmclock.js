let remainingTime = 0;
let intervalId = null;

function setAlarm() {
  const input = document.getElementById("alarmSet");

  // If timer is not started yet, read input
  if (intervalId === null && remainingTime === 0) {
    remainingTime = parseInt(input.value, 10);
    if (isNaN(remainingTime)) return;
    updateHeading(remainingTime);
  }

  // If already running, do nothing
  if (intervalId !== null) return;

  // Start or continue countdown
  intervalId = setInterval(() => {
    remainingTime--;

    if (remainingTime <= 0) {
      clearInterval(intervalId);
      intervalId = null;
      remainingTime = 0;
      updateHeading(0);
      playAlarm();
    } else {
      updateHeading(remainingTime);
    }
  }, 1000);
}

function pauseCountdown() {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null; // allows resume
  }
}

function updateHeading(seconds) {
  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");

  document.getElementById("timeRemaining").innerText =
    `Time Remaining: ${mins}:${secs}`;
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm(); // start OR continue
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseCountdown(); // pause only
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
