const receber = require('prompt-sync')({sigint: true})
let x, y, z;
x = Number(receber("Informe seu salário: "))
y = Number(receber("Informe o salário mínimo atual: "))
z = x / y
console.log("Você ganha exatos", z, "salários mínimos.")