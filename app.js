//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigosParaSeremSorteados = [];

function exibirLista(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function adicionarAmigo() {
    let nomeDoAmigo = document.querySelector('input').value;
    if (nomeDoAmigo == '') {
        alert('Digite um nome válido!');
    } else {
        amigosParaSeremSorteados.push(nomeDoAmigo);
        exibirLista('ul', amigosParaSeremSorteados);
        console.log(amigosParaSeremSorteados);
        limparCampo();
    }
}

function limparCampo(){
    let addcionar = document.querySelector('input');
    addcionar.value = "";
}

function sortearAmigo() {
    let amigoSorteado = listaAmigoSecreto[Math.floor(Math.random() * listaAmigoSecreto.length)];
    exibirLista('h2', amigoSorteado);
}