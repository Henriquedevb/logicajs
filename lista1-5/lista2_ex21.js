const receber = require('prompt-sync')({sigint: true})    
let r, cd, d;
console.log("Olá! Vamos coverter um valor de US$ para R$!")
d = Number(receber("Digite o valor em US$: "))
cd = Number(receber("Digite a cotação do dólar: "))
r = d * cd
console.log("O valor supracitado, em reais, corresponde a R$", r)
