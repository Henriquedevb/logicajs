const receber = require('prompt-sync')({sigint: true})
let num1, num2, num3, vt; 
num1 = Number(receber('Digite quantos filmes do tipo 1 foram locados: '));
num2 = Number(receber('Digite quantos filmes do tipo 2 foram locados: '));
num3 = Number(receber('Digite quantos filmes do tipo 3 foram locados: '));
vt = (num1 * 5) + (num2 * 7) + (num3 * 10);
console.log('O valor total da locação foi de: R$' + vt);