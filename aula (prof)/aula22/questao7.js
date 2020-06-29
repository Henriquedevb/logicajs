/*
Questão 7
Faça um programa que receba vários nomes pelo teclado e grave em um arquivo texto com o nome "cadastro.txt". O programa deve parar quando for digitado no teclado a palavra "fim".
*/
const receber = require('prompt-sync')({sigint: true});
const fs = require('fs');

function gravaNoArquivo(arq, dados){
    fs.writeFileSync(arq,`${dados}\n`, {flag: "a"});
}

console.clear();

do{
    nome = receber("Digite um nome: ");
    if(nome != "fim"){
        gravaNoArquivo('cadastro.txt', nome);
    }
}while(nome != "fim");