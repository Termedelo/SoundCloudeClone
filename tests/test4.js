let playBar = document.querySelector(".mainSlider #PlayBar");
let selector = document.querySelector(".mainSlider #selector");
let progressBar = document.querySelector(".mainSlider .progressBar");
let div = document.querySelector("#ahmad");
let currentTime = new Date();
let remainingTime = new Date();
currentTime.setMinutes(0, 0);
remainingTime.setMinutes(4, 30);
let totalTime = remainingTime.getMinutes() * 60 + remainingTime.getSeconds();
console.log(currentTime.getMinutes() + ":" + currentTime.getSeconds());
console.log(remainingTime.getMinutes() + ":" + remainingTime.getSeconds());
playBar.oninput = function () {
  selector.style.left = `${this.value}%`;
  progressBar.style.width = `${this.value}%`;
  div.innerHTML = `${this.value}%`;
  if (totalTime * (this.value / 100) >= 59) {
    currentTime.setMinutes((totalTime * (this.value / 100)) / 60);
    console.log(currentTime.getMinutes());
  }
};
