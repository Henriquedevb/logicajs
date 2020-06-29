const receber = require('prompt-sync')({sigint: true})
let a, l, p;
a = Number(receber('Digite a altura do muro, em m: '))
l = Number(receber('Digite a largura do muro, em m: '))
p = (2*a + 2*l) * 70
console.log(('O preço do muro será: R$' + p))