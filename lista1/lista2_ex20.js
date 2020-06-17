const receber = require('prompt-sync')({sigint: true})    
let r, cd, d;
console.log("Olá! Vamos coverter um valor de R$ para US$!")
r = Number(receber("Digite o valor em R$: "))
cd = Number(receber("Digite a cotação do dólar: "))
d = r/cd
console.log("O valor supracitado, em dólares, corresponde a US$", d)
