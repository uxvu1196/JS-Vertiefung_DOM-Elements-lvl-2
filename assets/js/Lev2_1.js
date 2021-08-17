// console.log("test");

/* let nav = document.getElementById("navHome")

function changeMe() {
    console.log("test")
    nav.style.backgroundColor="pink"
    nav.style.transform="scaleX(-1)"
} */

function changeMe() {
    let button = document.getElementById("navHome");
    button.classList.toggle("mirror");
}