/*
 Escreva um algoritmo para calcular o fatorial do número N, 
 cujo valor e obtido através do usuário pelo teclado.
*/
const receber = require('prompt-sync')({sigint: true});
let N, fat;
fat = 1;  //tem que inicializar desta forma porque 1 é o elemento neutro da multiplicação
N = Number(receber("Digite N: "));
for(k=N; k>0; k--){
    fat = fat * k;  
}
console.log("fatorial = " + fat);