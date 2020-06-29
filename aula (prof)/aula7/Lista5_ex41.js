/*
Escreva um algoritmo que calcule o m.d.c.  (máximo divisor comum)
entre A e B (números inteiros e positivos).  Esses dois valores são
passados pelo usuário através do teclado
*/
const receber = require('prompt-sync')({sigint: true});
let A, B, resto;

A = Number(receber("Digite A: "));
B = Number(receber("Digite B: "));

while(B != 0){
    resto = A%B;
    A = B;
    B = resto;
}
console.log("MDC = " + A);