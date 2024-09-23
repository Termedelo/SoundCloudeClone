const parent  = document.querySelector(".parent");
parent.addEventListener("click" , (e) => {
    if (e.target.classList.contains("child")) {
        e.target.style.color = "black";
    }
});