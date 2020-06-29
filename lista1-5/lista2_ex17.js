const receber = require('prompt-sync')({sigint: true})    
let a, b, c, x;
console.log("Olá! Vamos calcular o valor da hipotenusa de um triângulo!")
a = Number(receber("Digite o valor do cateto A: "))
b = Number(receber("Digite o valor do cateto B: "))
c = (a * a) + (b * b)
x = Math.sqrt(c)
console.log("O valor da hipotenusa é:", x)