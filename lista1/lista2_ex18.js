const receber = require('prompt-sync')({sigint: true})    
let c, l, a, v;
console.log("Olá! Vamos calcular o volume de uma caixa em formato de paralelepípedo!")
c = Number(receber("Digite o comprimento da caixa, em m²: "))
l = Number(receber("Digite a largura da caixa, em m²: "))
a = Number(receber("Digite a altura da caixa, em m²: "))
v = c * l * a
console.log("O volume da caixa é de", v, "m³.")