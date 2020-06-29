/*
Escrever um programa para receber pelo teclado 5 valores inteiros
e armazenar em um vetor. Imprima o vetor ao final.
*/
const receber = require('prompt-sync')({sigint: true});
let vet=[];

for(k=0; k<5; k++){
    vet[k] = Number(receber(`Digite o valor da pos. ${k}: `));
}

console.log(vet);