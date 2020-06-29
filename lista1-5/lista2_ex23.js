const receber = require('prompt-sync')({sigint: true})    
let x;
x = Number(receber("Digite um número: "))
console.log("O quadrado deste número é:", x*x)