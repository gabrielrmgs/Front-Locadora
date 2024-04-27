//const url_login = "http://localhost:8080/cliente/verificado/Gabriel";

function loginLocadora() {
    var textoInputado = document.getElementById("email").value;
    const url_login = "http://localhost:8080/cliente/verificado/" + textoInputado;
    getAPI(url_login, textoInputado);
}

let alterarPaginaBtn = document.getElementById("paginaBtn");
alterarPaginaBtn.addEventListener("click", loginLocadora);
/* alterarPaginaBtn.type = "reset";
 */

async function getAPI(url_login, textoInputado) {
    const response = await fetch(url_login, { method: "GET" });

    var data = await response.json();
    console.log(data);
    if (data.nome == textoInputado) {
        window.location.href = "http://127.0.0.1:5500/loc.html"
    }
}