let remainingTime = 0;
let intervalId = null;

function setAlarm() {
  const input = document.getElementById("alarmSet");
  const setBtn = document.getElementById("set");

  if (intervalId === null && remainingTime === 0) {
    remainingTime = parseInt(input.value, 10);

    if (isNaN(remainingTime) || remainingTime <= 0) {
      alert("Please enter a positive number of seconds.");
      remainingTime = 0;
      return;
    }

    updateHeading(remainingTime);
  }

  if (intervalId !== null) return;

  intervalId = setInterval(() => {
    remainingTime--;

    if (remainingTime <= 0) {
      clearInterval(intervalId);
      intervalId = null;
      remainingTime = 0;
      updateHeading(0);
      playAlarm();
      setBtn.innerText = "Set Alarm";
    } else {
      updateHeading(remainingTime);
    }
  }, 1000);

  setBtn.innerText = "Continue";
}

function pauseCountdown() {
  const setBtn = document.getElementById("set");

  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
    setBtn.innerText = "Continue";
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
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseCountdown();
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
