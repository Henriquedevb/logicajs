/*
Criar um algoritmo que leia dois valores para as variáveis A e B, que 
efetue a troca dosvalores de forma que a variável A passe a ter o valor 
da variável B e que a variável Bpasse a ter o valor da variável A. 
Apresente os valores trocados.
*/
const receber = require('prompt-sync')({sigint: true});
let a, b, aux;

a = Number(receber("Digite o valor de A: "));
b = Number(receber("Digite o valor de B: "));

console.log("Antes da troca: ");
console.log("A = " + a);
console.log("B = " + b);

aux = a;
a = b;
b = aux;

console.log("Após a troca: ");
console.log("A = " + a);
console.log("B = " + b);



