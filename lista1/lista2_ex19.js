const receber = require('prompt-sync')({sigint: true})    
let c, l, a, vm, vl;
console.log("Olá! Vamos calcular o volume de uma caixa em formato de paralelepípedo!")
c = Number(receber("Digite o comprimento da caixa, em m²: "))
l = Number(receber("Digite a largura da caixa, em m²: "))
a = Number(receber("Digite a altura da caixa, em m²: "))
vm = c * l * a
vl = vm * 10
console.log("O volume da caixa é de", vl, "l.")