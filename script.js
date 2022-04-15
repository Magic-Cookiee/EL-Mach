let buttonInfo = document.getElementsByClassName("contrainers-button");
let contrainersInfo = document.getElementsByClassName("contrainers-info");


for (let i = 0; i < buttonInfo.length; i++) {
    buttonInfo[i].onclick = function classToggling() {
        contrainersInfo[i].classList.toggle("contrainers-info-active");
        if (buttonInfo[i].innerHTML === 'Zobacz więcej') {
            buttonInfo[i].innerHTML = 'Pokaż mniej';
        } else
        buttonInfo[i].innerHTML = 'Zobacz więcej';
    }
}

window.addEventListener("scroll", function() {
    let navBar = document.querySelector("nav");
    navBar.classList.toggle("sticky", window.scrollY > 0);
})

let navLi = document.querySelectorAll(".menu-option");
let sec = document.querySelectorAll(".section");

function activeMenu() {
    let len=sec.length;
    while(--len && window.scrollY + 97 < sec[len].offsetTop){}
    navLi.forEach(ltx => ltx.classList.remove("active"));
    navLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);