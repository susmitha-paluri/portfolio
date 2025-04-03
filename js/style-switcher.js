/*=====================toggle style switcher========*/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
    styleSwitcherToggle.addEventListener("click", () =>{

     document.querySelector(".style-switcher").classList.toggle("translate");
})

// hide style -switcher on scrol
window.addEventListener("scroll",() =>{
    if( document.querySelector(".style-switcher").classList.contains("translate")){
        document.querySelector(".style-switcher").classList.remove("translate")
    }
})
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}
window.onload = () => {
    setActiveStyle('color-1');
};
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})
 
