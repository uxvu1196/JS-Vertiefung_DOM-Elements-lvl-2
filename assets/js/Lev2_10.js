let element = document.getElementById("element");

function smallB() {
    console.log("test");
    element.classList.add("small")
    element.classList.remove("middle")
    element.classList.remove("big")
}

function middleB() {
    console.log("test")
    element.classList.add("middle")
    element.classList.remove("small")
    element.classList.remove("big")
}

function bigB() {
    console.log("test")
    element.classList.add("big")
    element.classList.remove("small")
    element.classList.remove("middle")
}