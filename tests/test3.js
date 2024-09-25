// script.js
const seekbar = document.getElementById("seekbar");
const currentTimeDisplay = document.getElementById("current-time");
const totalTimeDisplay = document.getElementById("total-time");

// Convert seconds to minutes:seconds format (mm:ss)
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

// Update the current time and progress bar background as thumb is dragged
seekbar.addEventListener("input", () => {
  const currentTime = seekbar.value;
  const totalTime = seekbar.max; // 270 seconds for 4 min 30 sec

  // Update current time display
  currentTimeDisplay.textContent = formatTime(currentTime);

  // Update the progress bar background
  const progressPercent = (currentTime / totalTime) * 100;
  seekbar.style.background = `linear-gradient(to right, #ff4500 ${progressPercent}%, #aaa ${progressPercent}%)`;
});

// Set total time once (as it's static)
totalTimeDisplay.textContent = formatTime(seekbar.max);
