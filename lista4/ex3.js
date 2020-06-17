/* Escreva um programa que receba dois números pelo teclado e imprima as operações de soma,
diferença, produto, divisão e potência entre esses dois números. O programa deve implementar as
funções para as operações requeridas. */

let prompt = require('prompt-sync')({sigint: true});

function soma(x, y){
    return x + y;
}

function diferenca(x, y){
    return x - y;
}

function divisao(x, y){
    return x / y;
}

function multiplicacao(x, y){
    return x * y;
}

function pot(x, y){
    return x ** y;
}

linha = prompt('Digite os dois valores separados por espaço: ');
n = linha.split(' ');

for(let k = 0; k < n.length; k++){
    n[k] = Number(n[k]);
}

console.log(`Soma: ${soma(n[0], n[1])} ; subtração: ${diferenca(n[0], n[1])} ; divisão: ${divisao(n[0], n[1])} ; multiplicação: ${multiplicacao(n[0], n[1])} ; potência: ${pot(n[0], n[1])}.`);