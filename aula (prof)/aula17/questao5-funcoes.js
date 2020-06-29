/*
Questão 5
Elabore um programa com uma função que retorne o MAIOR entre dois 
valores recebidos como parâmetro. Escrever o maior valor, no 
programa principal.
*/
const receber = require('prompt-sync')({sigint: true});

function maximo(a, b){
    if(a > b){
        return a;
    }
    return b;
}

console.clear();

n1 = Number(receber("Digite n1: "));
n2 = Number(receber("Digite n2: "));

console.log(`Maior = ${maximo(n1, n2)}`);