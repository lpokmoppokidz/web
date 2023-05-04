const open=document.getElementById("open");
const close=document.getElementById("close");
const container=document.getElementById("container");
open.addEventListener("click", () =>{
    container.classList.add("active")
})
close.addEventListener("click", () =>{
    container.classList.remove("active")
})

const hambuger =document.getElementById("hambuger");
const close1=document.getElementById("close1");
const container1=document.getElementById("container1");
hambuger.addEventListener("click", () =>{
    container1.classList.add("active")
})
close1.addEventListener("click", () =>{
    container1.classList.remove("active")
})
