const receber = require('prompt-sync')({sigint: true})
let x, y, z;
x = Number(receber("Informe o numerador da fração: "))
y = Number(receber("Informe o denominador da fração: "))
z = x / y
console.log("O número fracionado, em decimais, é:", z);