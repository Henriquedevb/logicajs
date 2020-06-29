/*
Faça um programa que leia um vetor pré-existente de 8 posições e, em 
seguida, leia também dois valores X e Y quaisquer correspondentes a 
duas posições no vetor. Ao final seu programa deverá escrever a soma 
dos valores encontrados nas respectivas posições X e Y .
*/
const receber = require('prompt-sync')({sigint: true});
console.clear();
vet = [5, 7, 9, 22, 41, 17, 12, 15];

x = Number(receber("Posição x: "));
y = Number(receber("Posição y: "));

soma = vet[x] + vet[y];

console.log(`soma = ${soma}`);