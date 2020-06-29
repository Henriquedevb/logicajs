const receber = require('prompt-sync')({sigint: true})
let x;
console.log("Olá! Vamos mostrar o antecessor e o sucessor de um número desejado!")
x = Number(receber("Digite o número desejado: "))
console.log("O antecessor desse número é", x - 1 , ", e o sucessor desse número é" , x + 1,".")