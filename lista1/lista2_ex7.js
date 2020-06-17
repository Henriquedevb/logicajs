const receber = require('prompt-sync')({sigint: true})
let j, c, i, t;
c = Number(receber("Digite o valor do capital: R$"))
i = Number(receber("Digite o valor da taxa mensal, em números decimais: "))
t = Number(receber("Digite o tempo: "))
j = c * i * t
console.log("O rendimento foi de R$", j, "e o valor total foi de R$", c + j, ".")