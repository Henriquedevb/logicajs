const receber = require('prompt-sync')({sigint: true})    
let a, b, c, d, p, s;
a = Number(receber("Digite o valor da variável A: "))
b = Number(receber("Digite o valor da variável B: "))
c = Number(receber("Digite o valor da variável C: "))
d = Number(receber("Digite o valor da variável D: "))
p = a * c
s = b + d
console.log("O valor da variável P é", p, " e o valor da variável S é", s);