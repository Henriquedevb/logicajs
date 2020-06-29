const receber = require('prompt-sync')({sigint: true})
let r, a1, n, an;
a1 = Number(receber("Informe o primeiro termo da PA: "))
r = Number(receber("Informe a razão da PA: "))
n = Number(receber("Informe o número do termo a ser consultado: "))
an = a1  + r * (n - 1)
console.log("O valor do termo consultado é:", an)