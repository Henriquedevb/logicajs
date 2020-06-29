/*
Questão 8
Faça um programa que leia os nomes armazenados em um vetor e grave cada nome em uma linha do arquivo texto "registros.txt".
nomes = ['Carlos','Maria','Zoe','Jose','Joao','Alice','Isabel']
*/
const receber = require('prompt-sync')({sigint: true});
const fs = require('fs');

function gravaNoArquivo(arq, dados){
    fs.writeFileSync(arq,`${dados}\n`, {flag: "a"});
}

nomes = ['Carlos','Maria','Zoe','Jose','Joao','Alice','Isabel']

console.clear();

for(k=0; k<nomes.length; k++){
    gravaNoArquivo('registros.txt', nomes[k]);
}