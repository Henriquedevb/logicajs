const receber = require('prompt-sync')({sigint: true})
let x;
console.log("Vamos calcular o valor total da conta, juntamente com a gorjeta do garçom!")
x = Number(receber("Digite o valor da conta sem gorjeta:"))
console.log("O valor da conta é: " + x * 1.1 + ".")