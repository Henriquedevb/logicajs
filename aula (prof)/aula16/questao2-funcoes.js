/*
Questão 2
Escreva um programa que receba dois números pelo teclado e imprima a 
soma por meio de uma função.
*/
const receber = require('prompt-sync')({sigint: true});
console.clear();
function soma(a, b){
    return a + b;
}

/*
n1 = Number(receber("Digite n1: "));
n2 = Number(receber("Digite n2: "));*/
valores = receber("Digite dos números separados por espaço: ");
n = valores.split(" ");
for(k=0; k<n.length; k++){
    n[k] = Number(n[k]);
}

s = soma(n[0], n[1]);

console.log(`Soma = ${s}`);