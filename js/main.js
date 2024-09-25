const MAX_CLICKS = 4;
const SLIDE_POSITIONS = [0, 460, 900, 1340, 1670];
const initializeSlider = (slider) => {
  const cardsArr = slider.querySelectorAll(".card");
  const slideRight = slider.querySelector(".slideRight");
  const slideLeft = slider.querySelector(".slideLeft");
  let remainingRightClicks = MAX_CLICKS;
  let remainingLeftClicks = 0;
  let currentMoveIndex = 0;

  const updateSlideButtons = () => {
    // update the display of the left and right buttons based on the remaining clicks

    // If remainingLeftClicks is greater than 0, the left button is shown (block), otherwise, it’s hidden.
    slideLeft.style.display = remainingLeftClicks > 0 ? "block" : "none";
    // If remainingRightClicks is greater than 0, the right button is shown (block), otherwise, it’s hidden.
    slideRight.style.display = remainingRightClicks > 0 ? "block" : "none";
  };

  const moveCards = () => {
    // move the cards based on the current move index
    cardsArr.forEach((card) => {
      // applies a transform to each card based on the current slide position (currentMoveIndex).
      card.style.transform = `translateY(-50%) translateX(-${SLIDE_POSITIONS[currentMoveIndex]}%)`;
    });
  };

  slideRight.addEventListener("click", () => {
    // check if there are any remaining clicks and move the cards
    if (remainingRightClicks > 0) {
      remainingRightClicks--;
      remainingLeftClicks++;
      currentMoveIndex++;
      updateSlideButtons();
      moveCards();
    }
  });

  slideLeft.addEventListener("click", () => {
    // check if there are any remaining clicks and move the cards
    if (remainingLeftClicks > 0) {
      remainingRightClicks++;
      remainingLeftClicks--;
      currentMoveIndex--;
      updateSlideButtons();
      moveCards();
    }
  });
  // !
  // update the slide buttons
  updateSlideButtons();
};
document.querySelectorAll(".slider").forEach(initializeSlider);
////////////////////////////////////////////////////////////////////////////////////////////////////////
//! for the follow Buttons to change on click
const followBtn1 = document.querySelector(".follow1");
const icon1 = document.querySelector(".icon1");
const par1 = document.querySelector(".Artist1Par");
const followBtn2 = document.querySelector(".follow2");
const icon2 = document.querySelector(".icon2");
const par2 = document.querySelector(".Artist2Par");
const followBtn3 = document.querySelector(".follow3");
const icon3 = document.querySelector(".icon3");
const par3 = document.querySelector(".Artist3Par");
function follow(followBtn, icon, par) {
  // checked
  if (icon.classList.contains("fa-user-plus")) {
    followBtn.style.color = "orangeRed";
    followBtn.style.borderColor = "orangeRed";
    par.innerText = "Following";
    icon.classList.remove("fa-user-plus");
    icon.classList.add("fa-check");
    // icon
  } else {
    // not
    followBtn.style.color = "black";
    followBtn.style.borderColor = "#e5e5e5";
    par.innerText = "Follow";
    icon.classList.remove("fa-check");
    icon.classList.add("fa-user-plus");
  }
}

followBtn1.addEventListener("click", () => {
  follow(followBtn1, icon1, par1);
});
followBtn2.addEventListener("click", () => {
  follow(followBtn2, icon2, par2);
});
followBtn3.addEventListener("click", () => {
  follow(followBtn3, icon3, par3);
});
//!///////////////////////////////////////////////////////////////////////////////////////////////////////

let row2Arr = document.querySelectorAll(
  ".content .side-bar .row2 .TheSongs .row .center .description #buttons .like"
);
let row3Arr = document.querySelectorAll(
  ".content .side-bar .row3 .TheSongs .row .center .description #buttons .like"
);
function changingColors(Arr) {
  for (let i = 0; i < Arr.length; i++) {
    Arr[i].addEventListener("click", (e) => {
      if (e.target.style.color === "orangered") {
        e.target.style.color = "#aaa";
      } else {
        e.target.style.color = "orangered";
      }
    });
  }
}
changingColors(row2Arr);
changingColors(row3Arr);
//////////////////////////////////////////////////////////////////////////////////////////////////////
let deleteSideBar = document.querySelector(".content .side-bar .row4 .delete");
let deleteSideBarBtn = document.querySelector(
  ".content .side-bar .row4 .delete .mobile .right button"
);
let terms = document.querySelector(".content .side-bar .row4 .terms");

deleteSideBarBtn.addEventListener("click", () => {
  deleteSideBar.style.display = "none";
  terms.style.marginTop = "20px";
  terms.style.borderTop = "solid 1px #eee";
  terms.style.marginLeft = "11px";
  terms.style.paddingTop = "10px";
  terms.style.paddingLeft = "10px";
});
///////////////////////////////////////////playerBar/////////////////////////////////////////////////////
let playBar = document.querySelector(".mainSlider #PlayBar");
let selector = document.querySelector(".mainSlider #selector");
let progressBar = document.querySelector(".mainSlider .progressBar");
let currentTimerElement = document.querySelector(
  ".play .row .center .currentTimer"
);
let remainingTimerElement = document.querySelector(
  ".play .row .center .remainingTimer"
);
playBar.oninput = function () {
  selector.style.left = `${this.value}%`;
  progressBar.style.width = `${this.value}%`;
  currentTimer.innerText = `${formatTime(currentTime)}`;
};
// this was done at 2:28 AM
// Total time in seconds (4 minutes 30 seconds)
let min = remainingTimerElement.innerText[0];
let sec = parseInt(
  remainingTimerElement.innerText[2] + remainingTimerElement.innerText[3]
);
const totalDuration = min * 60 + sec;
// Convert seconds to minutes:seconds format
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}
// Update timers based on playBar value
function updateTimers() {
  const currentTime = Math.floor((playBar.value / playBar.max) * totalDuration);
  const remainingTime = totalDuration - currentTime;
  currentTimerElement.textContent = formatTime(currentTime);
  // to edit the remaining time and make it decrease
  // remainingTimerElement.textContent = formatTime(remainingTime);
}
// Add event listener for playBar movement
playBar.addEventListener("input", updateTimers);
// Initialize timers
updateTimers(); // Set initial values
///////////////////////////////////////the footer///////////////////////////////////////////////
let playerBtn = document.querySelector(".play .row .left .controls i:nth-child(2)");
playerBtn.addEventListener("click", () => {
  playerBtn.classList.toggle("fa-play");
  playerBtn.classList.toggle("fa-pause");
});