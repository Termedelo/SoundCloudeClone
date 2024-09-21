const cardsArr = document.querySelectorAll(".container span .card");
const slideRight = document.querySelector(".container .slideRight");
const slideLeft = document.querySelector(".container .slideLeft");

// what if there are 20 cards?
let remainingRightClicks = 4;
let remainingLeftClicks = 0;
let TotalNumberOfRightClicks = 0;
let TotalNumberOfLeftClicks = 0;
let move = 0;
slideRight.addEventListener("click", () => {
  TotalNumberOfRightClicks++;
  TotalNumberOfLeftClicks--;
  if (TotalNumberOfRightClicks < 4) {
    if (remainingRightClicks > 0) {
      remainingRightClicks--;
      remainingLeftClicks++;
      switch (remainingRightClicks) {
        case 3:
          move = 575;
          slideLeft.style.display = "block";
          break;
        case 2:
          move = 1175;
          slideLeft.style.display = "block";
          break;
        case 1:
          move = 1810;
          slideRight.style.display = "none";
          slideLeft.style.display = "block";
          break;
      }
      for (let i = 0; i < cardsArr.length; i++) {
        cardsArr[i].style.transform = `translateY(-50%) translateX(-${move}%)`;
      }
    }
  }
});

slideLeft.addEventListener("click", () => {
  TotalNumberOfRightClicks--;
  TotalNumberOfLeftClicks++;
  if (TotalNumberOfLeftClicks < 4) {
    if (remainingLeftClicks >= 0) {
      remainingRightClicks++;
      remainingLeftClicks--;
      switch (remainingLeftClicks) {
        case 3:
          move = 1810;
          slideRight.style.display = "block";
          break;
        case 2:
          move = 1175;
          slideRight.style.display = "block";
          break;
        case 1:
          move = 575;
          slideRight.style.display = "block";
          break;
        case 0:
          move = 0;
          slideRight.style.display = "block";
          slideLeft.style.display = "none";
          break;
      }
      for (let i = 0; i < cardsArr.length; i++) {
        cardsArr[i].style.transform = `translateY(-50%) translateX(-${move}%)`;
      }
    }
  }
});

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
