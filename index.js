const inputEl = document.getElementById("dark-mode");
const bodyEl = document.querySelector("body");
const headerEl = document.querySelector("header");
const h1El = document.querySelector("h1");
const h2Els = document.querySelectorAll("h2");
const topContainerEls = document.querySelectorAll(".cont");
const bottomContainerEls = document.querySelectorAll(".bottom-cont");
const h3Els = document.querySelectorAll("h3");


function updateBody() {
    topContainerEls.forEach((topContainerEl) => {
        if (inputEl.checked) {
            topContainerEl.style.background = "hsl(228, 28%, 20%)";
            topContainerEl.classList.add("active");
            
        } else {
            topContainerEl.style.background = "hsl(225, 100%, 98%)";
            topContainerEl.classList.remove("active");
            
        }

    
    });



   h2Els.forEach((h2El) => {
    if (inputEl.checked) {
        h2El.style.color = "white";
        
    } else {
        h2El.style.color ="black";
        
    }
   });

   bottomContainerEls.forEach((bottomContainerEl) => {
    if (inputEl.checked) {
        bottomContainerEl.style.background = "hsl(228, 28%, 20%)";
        bottomContainerEl.classList.add("active");
    } else {
        bottomContainerEl.style.background = "hsl(225, 100%, 98%)";
        bottomContainerEl.classList.remove("active");
    }
   });

   h3Els.forEach((h3El) => {
    if (inputEl.checked) {
        h3El.style.color = "white";
        
    } else {
        h3El.style.color ="black";
        
    }
   });

    if (inputEl.checked) {
        h1El.style.color = "white"
        bodyEl.style.background = "hsl(230, 17%, 14%)";
        headerEl.style.background = "hsl(232, 19%, 15%)";
        
    } else {
        h1El.style.color = "black"
        bodyEl.style.background = "white";
        headerEl.style.background = "hsl(225, 100%, 98%)";
    }

}



inputEl.addEventListener("input", () =>{
    updateBody()

})