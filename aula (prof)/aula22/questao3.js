/*
Questão 3
Faça um programa que receba do usuário um arquivo texto e mostre na tela o conteúdo desse arquivo linha a linha com numeração de linha do lado esquerdo da tela.
*/
const fs = require('fs');

function imprimeArquivo(arq){
    arquivo = fs.readFileSync(arq, 'utf-8'); 
    linha = arquivo.split('\n');
    nr = 1;
    for(k=0; k<linha.length; k++){
        linha[k] = `${nr++} - ${linha[k].trim()}`;
        console.log(linha[k]);
    }
}
console.clear();
imprimeArquivo('dados.txt');