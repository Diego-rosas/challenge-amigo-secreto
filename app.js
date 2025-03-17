//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigosParaSeremSorteados = [];

function exibirLista(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function adicionarAmigo() {
    let addcionar = document.querySelector('input').value;
    if (addcionar == '') {
        alert('Digite um nome!');
    } else {
        amigosParaSeremSorteados.push(addcionar);
        exibirLista('ul', amigosParaSeremSorteados);
        console.log(amigosParaSeremSorteados);
        limparCampo();
    }
}