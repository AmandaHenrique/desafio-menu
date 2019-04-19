let list = document.querySelector("#list");
let menu = document.querySelector(".menu");
let trace = document.querySelectorAll(".trace");

list.classList.add("showList");

click = () => {
    trace[0].classList.toggle("first");
    trace[1].classList.toggle("second");
    trace[2].classList.toggle("third");
    menu.classList.toggle("menuClicked");
    list.classList.toggle("showList");

}

menu.onclick = click;
