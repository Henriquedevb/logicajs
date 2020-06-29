const receber = require('prompt-sync')({sigint: true})
let x, y;
x = Number(receber('Digite um número: '))
y = Number(receber('Digite um número: '))
console.log('A média aritmética destes números é:' , (x + y)/2);
