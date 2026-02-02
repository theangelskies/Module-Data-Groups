let remainingTime = 0;
let intervalId = null;

function setAlarm() {
  const input = document.getElementById("alarmSet");
  remainingTime = parseInt(input.value, 10);

  if (isNaN(remainingTime)) return;

  // Update heading immediately
  updateHeading(remainingTime);

  // Clear existing interval if any
  if (intervalId !== null) {
    clearInterval(intervalId);
  }

  // Start countdown
  intervalId = setInterval(() => {
    remainingTime--;

    if (remainingTime <= 0) {
      clearInterval(intervalId);
      updateHeading(0);
      playAlarm();
    } else {
      updateHeading(remainingTime);
    }
  }, 1000);
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
