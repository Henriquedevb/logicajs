/*
Questão 09
Faça uma função recursiva que receba um número inteiro positivo par 
N e imprima todos os números pares de 0 até N em ordem crescente.
*/
const receber = require('prompt-sync')({sigint: true});
function imprimeRec(n, k){
    if(k%2==0){
        console.log(k);
    }
    if(k==n){
        return;
    }
    return imprimeRec(n, k+1);
}

console.clear();

n = Number(receber("Digite n: "));

imprimeRec(n, 0);