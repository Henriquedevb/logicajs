/*
Questão 3
Escreva um programa que receba dois números pelo teclado e imprima as 
operações de soma, diferença, produto, divisão e potência entre esses 
dois números. O programa deve implementar as funções para as operações 
requeridas.
*/
const receber = require('prompt-sync')({sigint: true});
console.clear();
function soma(a, b){
    return a + b;
}

function subtracao(a, b){
    return a - b;
}

function multiplicacao(a, b){
    return a * b;
}

function divisao(a, b){
    return a / b;
}

function potencia(b, e){
    return Math.pow(b, e);
}


n1 = Number(receber("Digite n1: "));
n2 = Number(receber("Digite n2: "));

console.log(`Soma = ${soma(n1, n2)}`);
console.log(`Diferença = ${subtracao(n1, n2)}`);
console.log(`Produto = ${multiplicacao(n1, n2)}`);
console.log(`Quociente = ${divisao(n1, n2)}`);
console.log(`Potência = ${potencia(n1, n2)}`);