const receber = require('prompt-sync')({sigint: true})
let v;
console.log("Olá! Vamos calcular o desconto do produto desejado!")
v = Number(receber("Digite o valor original do produto: "))
console.log("O valor do produto com desconto ficou R$" ,v * 0.91, ", e o valor descontado foi R$" ,v * 0.09,".")