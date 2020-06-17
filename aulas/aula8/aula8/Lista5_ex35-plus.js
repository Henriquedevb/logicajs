/*
Escreva  um  algoritmo  que  calcule  o  quociente e também o resto
da  divisão de  A  por  B  (número  inteiros e positivos), ou seja, 
A div B, através de subtrações sucessivas.  
Esses dois valores são passados pelo usuário através do teclado.
*/
const receber = require('prompt-sync')({sigint: true});
let A, B, quociente, resto;
quociente = 0;
resto = 0;

A = Number(receber("Digite o valor de A: "));
B = Number(receber("Digite o valor de B: "));

while(A > 0){
    A = A - B;
    if(A >= 0){
        quociente++;
    }
    else{
        resto = B + A;
    }
}
console.log("Valor de A: " + A);
console.log("Quociente = " + quociente);
console.log("Resto = " + resto);
