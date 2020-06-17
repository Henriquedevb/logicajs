/*
 Escreva um algoritmo que realize o produto de A (número real) 
 por B (número inteiro), ou seja, A * B, através de adições (somas).  
 Esses dois valores são passados pelo usuário através do teclado.
*/
const receber = require('prompt-sync')({sigint: true});
let A, B, soma;
soma = 0;
A = Number(receber("Digite o valor de A: "));
B = Number(receber("Digite o valor de B: "));

for(k=0; k<B; k++){
    //soma = soma + A;
    soma += A;
}
console.log("Soma = " + soma);
