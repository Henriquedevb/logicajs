const receber = require('prompt-sync')({sigint: true})
let q, a1, n, an;
a1 = Number(receber("Informe o primeiro termo da PG: "))
q = Number(receber("Informe a razão da PG: "))
n = Number(receber("Informe o número do termo a ser consultado: "))
an = a1 * (q ** (n - 1))
console.log("O valor do termo consultado é:", an)