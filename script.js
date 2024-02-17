// Responsive Menu
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.querySelector("ul");
bar.addEventListener("click",()=>{
    nav.style.right = "0px";
});
close.addEventListener("click",(event)=>{
    event.preventDefault();
    nav.style.right = "-300px";
});

// Load Detail
function loadDetail(){
    window.location.href = "detail.html";
}