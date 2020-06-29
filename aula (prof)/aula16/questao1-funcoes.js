/*
Questão 1
Crie uma função que recebe como parâmetro um número inteiro e devolve o 
seu dobro.
*/
const receber = require('prompt-sync')({sigint: true});

function dobro(n){
    return 2*n;
}

num = Number(receber("Digite um número: "));

console.log(`Dobro = ${dobro(num)}`);