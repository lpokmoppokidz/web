const open = document.getElementById("search");
const close = document.getElementById("close");
const container = document.getElementById("container");
open.addEventListener("click", () => {
    container.classList.add("active")
})
close.addEventListener("click", () => {
    container.classList.remove("active")
})

const hambuger = document.getElementById("menu");
const close1 = document.getElementById("close1");
const container1 = document.getElementById("container1");
hambuger.addEventListener("click", () => {
    container1.classList.add("active")
})
close1.addEventListener("click", () => {
    container1.classList.remove("active")
})
const container2 = document.getElementById("container2");
const close2 = document.getElementById("close2");
close2.addEventListener("click", () => {
    container2.classList.remove("active");
});

document.getElementById("demo").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}
