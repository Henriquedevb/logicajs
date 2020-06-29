/*
Questão 08
Faça uma função recursiva que receba um número inteiro positivo N e 
imprima todos os números naturais de 0 até N em ordem crescente.
*/
const receber = require('prompt-sync')({sigint: true});

function imprimeRec(n, k){
    console.log(k);
    if(k==n){
        return;
    }
    return imprimeRec(n, k+1);
}

console.clear();

n = Number(receber("Digite n: "));

imprimeRec(n, 0);