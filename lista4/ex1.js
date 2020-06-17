/*Crie uma função que recebe como parâmetro um número inteiro e devolve o seu dobro.*/

const prompt = require('prompt-sync')({sigint: true});

function dobro(x){
    return 2*x;
}

num = Number(prompt('Número: '));

console.log(dobro(num));