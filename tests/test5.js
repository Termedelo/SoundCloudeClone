const leftContainer = document.querySelector(".container .row .left");
const rightContainer = document.querySelector(".container .row .right");
// function syncScroll(e) {
//     e.preventDefault();
// }

document.addEventListener("scroll", () => {
  console.log(window.scrollY);
  console.log(window.scrollY > 500);
  if (window.scrollY < 600) {
    // rightContainer.style.position = "static";
  } else {
    // rightContainer.style.position = "sticky";
    // rightContainer.style.left = "64%";
  }
});
// leftContainer.addEventListener('scroll', syncScroll);
// rightContainer.addEventListener('scroll', syncScroll);
