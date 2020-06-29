/*
Questão 7
Escreva um programa que receba o raio de um círculo. Em seu programa, 
crie:
• uma função que retorne a área do círculo
• uma função que retorne a comprimento da circunferência.
área do círculo: π * R²
comprimento da circunferência: 2 * π * R
*/
const receber = require('prompt-sync')({sigint: true});

function area(r){
    return ( Math.PI * r * r );
}

function comprimento(r){
    return ( 2 * Math.PI * r );
}

console.clear();

raio = Number(receber("Digite o raio do círculo: "));
a = area(raio);
c = comprimento(raio);

saida = `Área = ${a} \nComprimento = ${c}`;

console.log(saida);