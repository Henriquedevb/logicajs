/*
Questão 2
Faça um programa que receba do usuário um arquivo texto e mostre na 
tela o conteúdo desse arquivo.
*/
const fs = require('fs');

function imprimeArquivo(arq){
    arquivo = fs.readFileSync(arq, 'utf-8');
    console.log(arquivo);
}

console.clear();

imprimeArquivo('dados.txt');