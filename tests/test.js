const MAX_CLICKS = 4;
const SLIDE_POSITIONS = [0, 450, 930, 1410 , 1920];
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
    cardsArr.forEach(card => {
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