// const cardsArr = document.querySelectorAll(".container span .card");
// const slideRight = document.querySelector(".container .slideRight");
// const slideLeft = document.querySelector(".container .slideLeft");

// // what if there are 20 cards?
// let remainingRightClicks = 4;
// let remainingLeftClicks = 0;
// let TotalNumberOfRightClicks = 0;
// let TotalNumberOfLeftClicks = 0;
// let move = 0;
// slideRight.addEventListener("click", () => {
//   TotalNumberOfRightClicks++;
//   TotalNumberOfLeftClicks--;
//   if (TotalNumberOfRightClicks < 4) {
//     if (remainingRightClicks > 0) {
//       remainingRightClicks--;
//       remainingLeftClicks++;
//       switch (remainingRightClicks) {
//         case 3:
//           move = 575;
//           slideLeft.style.display = "block";
//           break;
//         case 2:
//           move = 1175;
//           slideLeft.style.display = "block";
//           break;
//         case 1:
//           move = 1810;
//           slideRight.style.display = "none";
//           slideLeft.style.display = "block";
//           break;
//       }
//       for (let i = 0; i < cardsArr.length; i++) {
//         cardsArr[i].style.transform = `translateY(-50%) translateX(-${move}%)`;
//       }
//     }
//   }
// });

// slideLeft.addEventListener("click", () => {
//   TotalNumberOfRightClicks--;
//   TotalNumberOfLeftClicks++;
//   if (TotalNumberOfLeftClicks < 4) {
//     if (remainingLeftClicks >= 0) {
//       remainingRightClicks++;
//       remainingLeftClicks--;
//       switch (remainingLeftClicks) {
//         case 3:
//           move = 1810;
//           slideRight.style.display = "block";
//           break;
//         case 2:
//           move = 1175;
//           slideRight.style.display = "block";
//           break;
//         case 1:
//           move = 575;
//           slideRight.style.display = "block";
//           break;
//         case 0:
//           move = 0;
//           slideRight.style.display = "block";
//           slideLeft.style.display = "none";
//           break;
//       }
//       for (let i = 0; i < cardsArr.length; i++) {
//         cardsArr[i].style.transform = `translateY(-50%) translateX(-${move}%)`;
//       }
//     }
//   }
// });

//! the Right list :
//# R = 4 , L = 0
//# [1 , 5] => R = 3 , L = 1 -> -0%
//# [6 , 10] => R = 2 , L = 2 -> -575%
//# [11 , 15] => R = 1 , L = 3 -> -1175%
//# [16 , 20] => R = 0 , L = 4 -> -1810%

//! the left list :
//# L = 4 , R = 0
//# [1 , 5] => L = 3 , R = 1
//# [6 , 10] => L = 2 , R = 2
//# [11 , 15] => L = 1 , R = 3
//# [16 , 20] => L = 0 , R = 4


//? this what we had before 
// const cardsArr1 = document.querySelectorAll(".main .slider1 span .card");
// const slideRight1 = document.querySelector(".main .slider1 .slideRight");
// const slideLeft1 = document.querySelector(".main .slider1 .slideLeft");

// // what if there are 20 cards?
// let remainingRightClicks1 = 4;
// let remainingLeftClicks1 = 0;
// let TotalNumberOfRightClicks1 = 0;
// let TotalNumberOfLeftClicks1 = 0;
// let move1 = 0;
// slideRight1.addEventListener("click", () => {
//   TotalNumberOfRightClicks1++;
//   TotalNumberOfLeftClicks1--;
//   if (TotalNumberOfRightClicks1 < 4) {
//     if (remainingRightClicks1 > 0) {
//       remainingRightClicks1--;
//       remainingLeftClicks1++;
//       switch (remainingRightClicks1) {
//         case 3:
//           move1 = 575;
//           slideLeft1.style.display = "block";
//           break;
//         case 2:
//           move1 = 1175;
//           slideLeft1.style.display = "block";
//           break;
//         case 1:
//           move1 = 1850;
//           slideRight1.style.display = "none";
//           slideLeft1.style.display = "block";
//           break;
//       }
//       for (let i = 0; i < cardsArr1.length; i++) {
//         cardsArr1[
//           i
//         ].style.transform = `translateY(-50%) translateX(-${move1}%)`;
//       }
//     }
//   }
// });
// slideLeft1.addEventListener("click", () => {
//   TotalNumberOfRightClicks1--;
//   TotalNumberOfLeftClicks1++;
//   if (TotalNumberOfLeftClicks1 < 4) {
//     if (remainingLeftClicks1 >= 0) {
//       remainingRightClicks1++;
//       remainingLeftClicks1--;
//       switch (remainingLeftClicks1) {
//         case 3:
//           move1 = 1810;
//           slideRight1.style.display = "block";
//           break;
//         case 2:
//           move1 = 1175;
//           slideRight1.style.display = "block";
//           break;
//         case 1:
//           move1 = 575;
//           slideRight1.style.display = "block";
//           break;
//         case 0:
//           move1 = 0;
//           slideRight1.style.display = "block";
//           slideLeft1.style.display = "none";
//           break;
//       }
//       for (let i = 0; i < cardsArr1.length; i++) {
//         cardsArr1[
//           i
//         ].style.transform = `translateY(-50%) translateX(-${move1}%)`;
//       }
//     }
//   }
// });




//? update

// when there are 20 cards 
// 20/4-1
const MAX_CLICKS = 4;
const SLIDE_POSITIONS = [0, 450, 930, 1410 , 1920];

//! the `const initializeSlider = (slider) => {` is an update so it works on any slider
// ? why we choose to put the function inside a var?
//// so it wouldn't be loaded in the execution context before the execution of the code itself happen.( variables do not load until the js engin gets to its line of execution) this will reduce the latency that can be from the forEach
// ? the slider here is the DOM object we need to select to put an listener on it.(look at the last line)

const initializeSlider = (slider) => {
  //// selectors for each slider
  const cardsArr = slider.querySelectorAll(".card");
  const slideRight = slider.querySelector(".slideRight");
  const slideLeft = slider.querySelector(".slideLeft");

  //// state Variables
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
  //// this is called once to set the initial state of the buttons (since the left button should be hidden at the start).
  updateSlideButtons();
};

//! this is an update so it works on many sliders
/*
selects all slider containers on the page.
The forEach loop applies the initializeSlider function to each container, allowing each slider to have its own independent behavior.
*/
//? we selected all the sliders here and then we applied the initializeSlider in a forEach that takes 
//? all the sliders and put on every single on of them a different eventListener with different references in memory 
document.querySelectorAll(".slider").forEach(initializeSlider);

/* any comment colored or on two lines must be deleted
its only for clarity and explanation */