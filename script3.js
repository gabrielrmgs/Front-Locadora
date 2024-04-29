function cadastroLocadora() {
    let nomeInput = document.getElementById("nomeCadastro").value;
    let senhaInput = document.getElementById("senhaCadastro").value;
    const url_cadastro = "http://localhost:8080/cliente";
    getAPI(url_cadastro, nomeInput, senhaInput);
}

async function getAPI(url_cadastro, nomeInput, senhaInput) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "nome": nomeInput,
        "senha": senhaInput
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    await fetch(url_cadastro, requestOptions)
        .then((response) => response.text())
        .then(function(result) {
            console.log(result);
            window.location.href = "http://127.0.0.1:5500/index.html";
        })
        .catch((error) => console.error(error));
}

let btnCadastro = document.getElementById("cadastroBtn");
btnCadastro.addEventListener("click", cadastroLocadora);