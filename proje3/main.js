var open = document.querySelector(".open");
var close = document.querySelector(".close");
var menu = document.querySelector(".links");

function openMenu(){
    open.style.display = "none";
    close.style.display = "flex";
    menu.style.height = "90" + "vh";
}
function closeMenu(){
    open.style.display = "flex";
    close.style.display = "none";
    menu.style.height = "0" + "vh";
}
