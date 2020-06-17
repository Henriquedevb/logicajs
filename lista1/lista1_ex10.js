const receber = require('prompt-sync')({sigint: true})
let a, l, t;
console.log("Olá! Vamos calcular quantas peças de cerâmica são necessárias para cobrir uma parede.")
a = Number(receber("Digite a altura da parede, em m: "))
l = Number(receber("Digite a largura da parede, em m: "))
t = (a * l) / 0.2
console.log("Serão necessárias", t, "cerâmicas.")

