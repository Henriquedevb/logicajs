/*
Questão 03
Escreva uma função recursiva que calcule a soma dos primeiros n 
cubos: S(n) = 1³ + 2³ + ... + n³
*/
const receber = require('prompt-sync')({sigint: true});

function somaCubos(n){
    if( n==1 ){
        return 1;
    }
    return Math.pow(n, 3) + somaCubos(n-1);
}

console.clear();

num = Number(receber("Digite um número: "));

console.log(`Soma de ${num} primeiros cubos: ${somaCubos(num)}`);
