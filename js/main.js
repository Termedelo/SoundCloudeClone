const cardsArr1 = document.querySelectorAll(".main .slider1 span .card");
const slideRight1 = document.querySelector(".main .slider1 .slideRight");
const slideLeft1 = document.querySelector(".main .slider1 .slideLeft");

// what if there are 20 cards?
let remainingRightClicks1 = 4;
let remainingLeftClicks1 = 0;
let TotalNumberOfRightClicks1 = 0;
let TotalNumberOfLeftClicks1 = 0;
let move1 = 0;
slideRight1.addEventListener("click", () => {
  TotalNumberOfRightClicks1++;
  TotalNumberOfLeftClicks1--;
  if (TotalNumberOfRightClicks1 < 4) {
    if (remainingRightClicks1 > 0) {
      remainingRightClicks1--;
      remainingLeftClicks1++;
      switch (remainingRightClicks1) {
        case 3:
          move1 = 575;
          slideLeft1.style.display = "block";
          break;
        case 2:
          move1 = 1175;
          slideLeft1.style.display = "block";
          break;
        case 1:
          move1 = 1850;
          slideRight1.style.display = "none";
          slideLeft1.style.display = "block";
          break;
      }
      for (let i = 0; i < cardsArr1.length; i++) {
        cardsArr1[
          i
        ].style.transform = `translateY(-50%) translateX(-${move1}%)`;
      }
    }
  }
});

slideLeft1.addEventListener("click", () => {
  TotalNumberOfRightClicks1--;
  TotalNumberOfLeftClicks1++;
  if (TotalNumberOfLeftClicks1 < 4) {
    if (remainingLeftClicks1 >= 0) {
      remainingRightClicks1++;
      remainingLeftClicks1--;
      switch (remainingLeftClicks1) {
        case 3:
          move1 = 1810;
          slideRight1.style.display = "block";
          break;
        case 2:
          move1 = 1175;
          slideRight1.style.display = "block";
          break;
        case 1:
          move1 = 575;
          slideRight1.style.display = "block";
          break;
        case 0:
          move1 = 0;
          slideRight1.style.display = "block";
          slideLeft1.style.display = "none";
          break;
      }
      for (let i = 0; i < cardsArr1.length; i++) {
        cardsArr1[
          i
        ].style.transform = `translateY(-50%) translateX(-${move1}%)`;
      }
    }
  }
});

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Slider2!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const cardsArr2 = document.querySelectorAll(".main .slider2 span .card");
const slideRight2 = document.querySelector(".main .slider2 .slideRight");
const slideLeft2 = document.querySelector(".main .slider2 .slideLeft");

// what if there are 20 cards?
let remainingRightClicks2 = 4;
let remainingLeftClicks2 = 0;
let TotalNumberOfRightClicks2 = 0;
let TotalNumberOfLeftClicks2 = 0;
let move2 = 0;
slideRight2.addEventListener("click", () => {
  TotalNumberOfRightClicks2++;
  TotalNumberOfLeftClicks2--;
  if (TotalNumberOfRightClicks2 < 4) {
    if (remainingRightClicks2 > 0) {
      remainingRightClicks2--;
      remainingLeftClicks2++;
      switch (remainingRightClicks2) {
        case 3:
          move2 = 575;
          slideLeft2.style.display = "block";
          break;
        case 2:
          move2 = 1175;
          slideLeft1.style.display = "block";
          break;
        case 1:
          move2 = 1850;
          slideRight2.style.display = "none";
          slideLeft2.style.display = "block";
          break;
      }
      for (let i = 0; i < cardsArr2.length; i++) {
        cardsArr2[
          i
        ].style.transform = `translateY(-50%) translateX(-${move2}%)`;
      }
    }
  }
});

slideLeft2.addEventListener("click", () => {
  TotalNumberOfRightClicks2--;
  TotalNumberOfLeftClicks2++;
  if (TotalNumberOfLeftClicks2 < 4) {
    if (remainingLeftClicks2 >= 0) {
      remainingRightClicks2++;
      remainingLeftClicks2--;
      switch (remainingLeftClicks2) {
        case 3:
          move2 = 1810;
          slideRight2.style.display = "block";
          break;
        case 2:
          move2 = 1175;
          slideRight2.style.display = "block";
          break;
        case 1:
          move2 = 575;
          slideRight2.style.display = "block";
          break;
        case 0:
          move2 = 0;
          slideRight2.style.display = "block";
          slideLeft2.style.display = "none";
          break;
      }
      for (let i = 0; i < cardsArr2.length; i++) {
        cardsArr2[
          i
        ].style.transform = `translateY(-50%) translateX(-${move2}%)`;
      }
    }
  }
});

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Slider3!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const cardsArr3 = document.querySelectorAll(".main .slider3 span .card");
const slideRight3 = document.querySelector(".main .slider3 .slideRight");
const slideLeft3 = document.querySelector(".main .slider3 .slideLeft");

// what if there are 20 cards?
let remainingRightClicks3 = 4;
let remainingLeftClicks3 = 0;
let TotalNumberOfRightClicks3 = 0;
let TotalNumberOfLeftClicks3 = 0;
let move3 = 0;
slideRight3.addEventListener("click", () => {
  TotalNumberOfRightClicks3++;
  TotalNumberOfLeftClicks3--;
  if (TotalNumberOfRightClicks3 < 4) {
    if (remainingRightClicks3 > 0) {
      remainingRightClicks3--;
      remainingLeftClicks3++;
      switch (remainingRightClicks3) {
        case 3:
          move3 = 575;
          slideLeft3.style.display = "block";
          break;
        case 2:
          move3 = 1175;
          slideLeft1.style.display = "block";
          break;
        case 1:
          move3 = 1850;
          slideRight3.style.display = "none";
          slideLeft3.style.display = "block";
          break;
      }
      for (let i = 0; i < cardsArr3.length; i++) {
        cardsArr3[
          i
        ].style.transform = `translateY(-50%) translateX(-${move3}%)`;
      }
    }
  }
});

slideLeft3.addEventListener("click", () => {
  TotalNumberOfRightClicks3--;
  TotalNumberOfLeftClicks3++;
  if (TotalNumberOfLeftClicks3 < 4) {
    if (remainingLeftClicks3 >= 0) {
      remainingRightClicks3++;
      remainingLeftClicks3--;
      switch (remainingLeftClicks3) {
        case 3:
          move3 = 1810;
          slideRight3.style.display = "block";
          break;
        case 2:
          move3 = 1175;
          slideRight3.style.display = "block";
          break;
        case 1:
          move3 = 575;
          slideRight3.style.display = "block";
          break;
        case 0:
          move3 = 0;
          slideRight3.style.display = "block";
          slideLeft3.style.display = "none";
          break;
      }
      for (let i = 0; i < cardsArr3.length; i++) {
        cardsArr3[
          i
        ].style.transform = `translateY(-50%) translateX(-${move3}%)`;
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
//!///////////////////////////////////////////////////////////////////////

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
