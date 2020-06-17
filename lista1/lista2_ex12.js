const receber = require('prompt-sync')({sigint: true})
let v, n, d, t;
v = Number(receber("Digite o valor da hora-aula: "))
n = Number(receber("Digite o número de aulas dadas: "))
d = Number(receber("Digite o percentual de desconto do INSS (em números decimais): "))
t = (v * n) * (1 - d)
console.log("O total do seu salário será R$", t)