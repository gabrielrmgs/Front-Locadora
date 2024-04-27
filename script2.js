function troca() {
    let tes = document.getElementById("testand")
    tes.style.color = tes.style.color == "red" ? "black" : "red"

}
let btn = document.getElementById("colorbtn")
btn.addEventListener("click", troca)

function painel() {
    let mod = document.getElementById("modelbar")
    mod.style.display = "flex";
}

let btn3 = document.getElementById("butaobaixo")
btn3.addEventListener("click", painel)

function fecharPainel() {
    let mod = document.getElementById("modelbar");
    mod.style.display = "none";
}
let btnClose = document.getElementById("close-modal-btn");
btnClose.addEventListener("click", fecharPainel);

function openMenu() {
    let mod = document.getElementById("test3");
    mod.style.display = mod.style.display == "grid" ? "none" : "grid";

}
let btnMenu = document.getElementById("user-menu-button")
btnMenu.addEventListener("click", openMenu)

/* function fecharMenu() {
    let mod = document.getElementById("test3");
    mod.style.display = mod.style.display == "none"

}
let btnMenu1 = document.getElementById("user-menu-button")
btnMenu1.addEventListener("click", fecharMenu) */