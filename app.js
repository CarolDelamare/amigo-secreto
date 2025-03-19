let listaAmigos = [];

function adicionarAmigo(event) {
    if (event) event.preventDefault(); // Impede o envio do formulário se houver um evento
    
    const inputAmigo = document.getElementById("amigo");
    const nomeAmigo = inputAmigo.value.trim(); // Captura o valor e remove espaços extras
    
    console.log("Valor inserido antes da validação:", nomeAmigo); // Verifica o valor antes de qualquer ação

    if (!nomeAmigo) {  
        alert("Por favor, digite um nome válido.");
        return;
    }
    
    listaAmigos.push(nomeAmigo);
    inputAmigo.value = ""; // Limpa o campo de entrada
    console.log("Valor após limpar o input:", inputAmigo.value); // Verifica se está realmente limpando
    atualizarLista();
}

function atualizarLista() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = ""; // Limpa a lista antes de atualizar

    listaAmigos.forEach((amigo) => {
        const item = document.createElement("li");
        item.textContent = amigo;
        listaElement.appendChild(item);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceSorteado];

    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;
}

// Aguarda o carregamento do DOM para garantir que os elementos existem
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".button-add").addEventListener("click", adicionarAmigo);
    document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
});
