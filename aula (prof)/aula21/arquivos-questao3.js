/*
Questão 3
Faça um programa que receba do usuário um arquivo texto e mostre na tela 
o conteúdo desse arquivo linha a linha com numeração de linha do lado 
esquerdo da tela.
*/
const fs = require('fs');

function imprimeArquivo(arq){
    arquivo = fs.readFileSync(arq, 'utf-8');
    linha = arquivo.split('\n');
    
    nrLin = 1;
    for(l=0; l<linha.length; l++){
        linha[l] = `${nrLin++} - ${linha[l]}`;
        console.log(linha[l]);
    }
}

console.clear();

imprimeArquivo('dados.txt');
