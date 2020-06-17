/*
Escreva  um  algoritmo  que  calcule  o  quociente  da  divisão  
de  A  por  B  (número  inteiros e positivos), ou seja, A div B,
através de subtrações sucessivas.  
Esses dois valores são passados pelo usuário através do teclado.
*/
const receber = require('prompt-sync')({sigint: true});
let A, B, quociente;
quociente = 0;

A = Number(receber("Digite o valor de A: "));
B = Number(receber("Digite o valor de B: "));

for(k=0; k<B; k++){
    
    soma += A;
}
console.log("Soma = " + soma);
