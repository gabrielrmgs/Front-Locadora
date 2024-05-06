function loginLocadora() {
    let textoInputado = document.getElementById("email").value;
    let senhaInput = document.getElementById("password").value;
    const url_login = "http://localhost:8080/cliente/verificado/" + textoInputado;
    getAPI(url_login, textoInputado, senhaInput);
}

let alterarPaginaBtn = document.getElementById("paginaBtn");
alterarPaginaBtn.addEventListener("click", loginLocadora);

async function getAPI(url_login, textoInputado, senhaInput) {
    const response = await fetch(url_login, { method: "GET" });

    let data = await response.json();
    //console.log(data);
    if (data.nome == textoInputado) {
        if (data.senha == senhaInput) {
            window.location.href = "http://127.0.0.1:5500/loc.html";
            if (data.nome == "admin") {
                localStorage.setItem("user", "admin");
            }
        } else {
            console.log("senha inválida");
        }
    } else {
        console.log("Usuário inexistente");
    }
}