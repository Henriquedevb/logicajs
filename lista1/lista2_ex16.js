const receber = require('prompt-sync')({sigint: true})    
let a, b, c, x;
a = Number(receber("Digite o valor da variável A: "))
b = Number(receber("Digite o valor da variável B: "))
c = Number(receber("Digite o valor da variável C: "))
x = (a + b + c) * (a + b + c)
console.log("O quadrado da soma das variáveis é:", x)