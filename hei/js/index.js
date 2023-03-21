let tabBtnStarted = [...document.querySelectorAll(".btn-started")];

tabBtnStarted.forEach((element)=>{
    element.addEventListener("click",()=>{
        const target = document.querySelector("#contact");
        target.scrollIntoView({behavior:"smooth"});
    });
});

function navbarBackground() {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            document.querySelector("nav").classList.add("bg-perso3");
        }
        else {
            document.querySelector("nav").classList.remove("bg-perso3");
        }
    });
}
navbarBackground();
/*-----------------------------------------------------*/

let tabBtn = [...document.querySelectorAll(".btn-menu")];
let tabLink = [...document.querySelectorAll(".navbar-menu a")];

tabBtn.forEach((element)=>{
    element.addEventListener("click",()=>{
        document.querySelector(".navbar-back").classList.toggle("d-none");
        document.querySelector(".navbar-menu").classList.toggle("showSlide");        
    });
});
tabLink.forEach((element)=>{
    element.addEventListener("click",()=>{
        document.querySelector(".navbar-back").classList.toggle("d-none");
        document.querySelector(".navbar-menu").classList.toggle("showSlide");        
    });
});

// ----------------------------------------