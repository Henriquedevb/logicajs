/*
Questão 11
Escrever um programa que receba um número. Seu programa deve conter uma 
função para calcular o fatorial do número recebido.
*/ 
//  5! = 5 * 4 * 3 * 2 * 1
const receber = require('prompt-sync')({sigint: true});

function fatorial(n){
    fat = 1;
    for(k=n; k>=1; k--){
        fat = fat * k;
    }
    return fat;
}

console.clear();

num = Number(receber("Digite um número: "));
console.log(`Fatorial de ${num} é ${fatorial(num)}`);