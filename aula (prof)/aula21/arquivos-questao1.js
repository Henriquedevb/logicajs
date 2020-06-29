/*
Questão 1
Faça um programa que receba do usuário um arquivo texto e mostre na 
tela quantas linhas esse arquivo possui.
*/
const fs = require('fs');

function linhas(arq){
    arquivo = fs.readFileSync(arq, 'utf-8');
    linhas = arquivo.split('\n');
    return linhas.length;
}
console.clear();
console.log(`Total de linhas: ${linhas('alunos.txt')}`);