const receber = require('prompt-sync')({sigint: true})
let x;
console.log("Olá! Vamos calcular o perímetro e a área de um quadrado.")
x = Number(receber("Digite a medida de um dos lados do quadrado, em cm: "))
console.log("O perímetro do quadrado é", 4*x, "cm e sua área é", x*x, "cm².")