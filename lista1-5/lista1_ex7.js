const receber = require('prompt-sync')({sigint: true})
let l, p;
console.log("Olá! Vamos calcular o perímetro de um quadrado.")
l = Number(receber("Digite a medida dos lados de um quadrado, em cm: "))
p = 4 * l
console.log("O perímetro do quadrado é:", p, "cm.")