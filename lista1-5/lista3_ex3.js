const receber = require('prompt-sync')({sigint: true}) 
let num1, num2, vt;
num1 = Number(receber('Digite quantos livros do tipo 1 foram alugados: '));
num2 = Number(receber('Digite quantos livros do tipo 2 foram alugados: '));
vt = (num1 * 5) + (num2 * 10);
console.log('O valor total da locação é de: R$' + vt);