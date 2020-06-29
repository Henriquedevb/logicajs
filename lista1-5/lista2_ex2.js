const receber = require('prompt-sync')({sigint: true})
let x;
console.log("Olá! Vamos calcular a terça parte de um número desejado!")
x = Number(receber("Digite o número desejado: "))
console.log("A terça parte do número desejado é" ,x/3, ".")