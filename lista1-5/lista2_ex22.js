const receber = require('prompt-sync')({sigint: true})    
let vc, vn, t, d;
console.log("Olá! Vamos coverter o valor de uma prestação em atraso!")
vn = Number(receber("Digite o valor nominal da prestação: R$"))
t = Number(receber("Digite o percentual da taxa por dias de atrasos: "))
d = Number(receber("Digite a quantidade de dias em atraso: "))
vc = vn + (vn * (t / 100) * d)
console.log("O valor da prestação com os juros aplicados é de R$", vc)