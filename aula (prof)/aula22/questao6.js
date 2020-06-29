/*
Questão 6
Faça um programa que receba um nome pelo teclado e grave em um arquivo texto com o nome "cadastro.txt".
*/
const receber = require('prompt-sync')({sigint: true});
const fs = require('fs');

function gravaNoArquivo(arq, dados){
    fs.writeFileSync(arq,`${dados}\n`, {flag: "a"});
    console.log("Dados salvos com sucesso...");
}

console.clear();
nome = receber("Digite um nome: ");
gravaNoArquivo('cadastro.txt', nome);
