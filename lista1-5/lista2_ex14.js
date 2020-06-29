const receber = require('prompt-sync')({sigint: true})
let a, b;
a = Number(receber("Informe o valor de A: "))
b = Number(receber("Informe o valor de B: "))
console.log("O valor alterado de A é:", b) 
console.log("O valor alterado de B é:", a)