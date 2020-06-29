/*
Questão 2
Carlos tem 1,12 m e cresce 1 centı́metro por ano, enquanto João tem 1.0 metro e cresce 2 centı́metros por ano. Escreva um programa que calcule e imprima quantos anos serão necessários para que João seja maior que Carlos.
*/
const receber = require('prompt-sync')({sigint: true});
console.clear();

carlos = 1.12;
joao   = 1.00;
anos = 0;

while(joao <= carlos){
    carlos += 0.01;
    joao   += 0.02;
    anos++;
}

console.log(anos);