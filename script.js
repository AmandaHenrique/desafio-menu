let menu = document.querySelector(".menu");
let trace = document.querySelectorAll(".trace");

click = () => {
    trace[0].classList.toggle("first");
    trace[1].classList.toggle("second");
    trace[2].classList.toggle("third");
    menu.classList.toggle("menuClicked");
}

menu.onclick = click;