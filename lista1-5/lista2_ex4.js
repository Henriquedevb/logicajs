const receber = require('prompt-sync')({sigint: true})
let v, d, r, h;
console.log('Vamos calcular o volume de uma lata de óleo!')
h = Number(receber('Digite a altura da lata: '))
d = Number(receber('Digite o diâmetro da lata: '))
r = Number(d / 2)
v = 3.14 * (r*r) * h
console.log('O volume da lata de óleo é: ' + v + ".")