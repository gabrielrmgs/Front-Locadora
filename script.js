/* const url = "http://localhost:8080/filme/1";
 */

/* function mostrarFilmes(filmes) {

    let tab = `<thead>
    <tr>
        <th class="">#</th>
        <th>Nome</th>
        <th>Diretor</th>
    </tr>
    </thead>
    `;

    //for (let filme of filmes) {
    tab += `<tbody>
        <tr>
            <td>${filmes.id}</td>
            <td>${filmes.nome}</td>
            <td>${filmes.diretor}</td>
        </tr>
    </tbody>`;


    document.getElementById("filmes").innerHTML = tab;
}

async function getAPI(url) {
    const response = await fetch(url, { method: "GET" });

    var data = await response.json();
    console.log(data);
    mostrarFilmes(data);
}

getAPI(url); */


function troca() {
    let tes = document.getElementById("testand")
    tes.style.color = tes.style.color == "red" ? "black" : "red"

}
let btn = document.querySelector("button")
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

function openMenu(){
    let mod = document.getElementById("test3");
    mod.style.display = mod.style.display == "grid" ? "none" : "grid";

}

let btnMenu = document.getElementById("user-menu-button")
btnMenu.addEventListener("mouseover", openMenu)
function fecharMenu(){
    let mod = document.getElementById("test3");
    mod.style.display = mod.style.display == "grid" ? "none" : "grid";
    
}
let btnMenu1 = document.getElementById("user-menu-button")
btnMenu.addEventListener("mouseout", fecharMenu)

