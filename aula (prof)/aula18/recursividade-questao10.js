/*
Questão 10
Faça uma função recursiva que receba um número inteiro positivo par 
N e imprima todos os números pares de 0 até N em ordem decrescente.
*/

const receber = require('prompt-sync')({sigint: true});

function imprimeRec(n){
    if(n%2==0){
        console.log(n);
    }
    if(n==0){
        return;
    }
    return imprimeRec(n-1);
}

console.clear();

n = Number(receber("Digite n: "));

imprimeRec(n);