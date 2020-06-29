/*
Questão 06
A multiplicação de dois números inteiros pode ser feita através de somas 
sucessivas. Proponha um algoritmo recursivo multipRec(n1,n2) que calcule 
a multiplicação de dois inteiros.
p.ex. 3 x 4 = 3 + 3 + 3 + 3
3 x 4
3 + 3x3 
3 + 3 + 3x2 
3 + 3 + 3 + 3x1
3 + 3 + 3 + 3 + 3x0 
*/
const receber = require('prompt-sync')({sigint: true});

function multipRec(n1, n2){
    if(n2==1){
        return n1;
    }
    return n1 + multipRec(n1, n2-1);
}

console.clear();

a = Number(receber("Digite a: "));
b = Number(receber("Digite b: "));

console.log(`${a} x ${b} = ${multipRec(a, b)}`);

