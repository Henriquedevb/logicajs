const receber = require('prompt-sync')({sigint: true})    
let x, y, z;
x = Number(receber("Digite um número: "))
y = Number(receber("Digite outro número: "))
z = x - y
console.log("O quadrado da diferença do primeiro número pelo segundo é:", z * z)
