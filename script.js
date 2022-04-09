let buttonInfo = document.getElementsByClassName("contrainers-button");
let contrainersInfo = document.getElementsByClassName("contrainers-info");

for (let i = 0; i < buttonInfo.length; i++) {
    buttonInfo[i].onclick = function() {
        contrainersInfo[i].classList.toggle("contrainers-info-active");
        if (buttonInfo[i].innerHTML === 'Zobacz więcej') {
            buttonInfo[i].innerHTML = 'Pokaż mniej'
        } else buttonInfo[i].innerHTML = 'Zobacz więcej'
    }
}

window.addEventListener("scroll", function() {
    let navBar = document.querySelector("nav");
    navBar.classList.toggle("sticky", window.scrollY > 0);
})
