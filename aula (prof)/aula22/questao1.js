/*
Questão 1
Faça um programa que receba do usuário um arquivo texto e mostre na tela quantas linhas esse arquivo possui.
*/

const fs = require('fs');

function linhas(arq){
    arquivo = fs.readFileSync(arq, 'utf-8');
    lin = arquivo.split("\n");   //o caractere '\n' indica o final de linha
    return lin.length;
}

console.log(`Total de linhas: ${linhas("dados.txt")}`);
