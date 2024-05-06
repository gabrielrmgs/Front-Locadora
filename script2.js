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

function sairUsuario() {
    localStorage.clear();
    window.location.href = "http://127.0.0.1:5500/index.html";
}

let btnSair = document.getElementById("sairBtn");
btnSair.addEventListener("click", sairUsuario);

if (localStorage["user"] == "admin") {
    document.getElementById("configuracaoBtn").style.display = "grid";
}

/* function fecharMenu() {
    let mod = document.getElementById("test3");
    mod.style.display = mod.style.display == "none"

}
let btnMenu1 = document.getElementById("user-menu-button")
btnMenu1.addEventListener("click", fecharMenu) */