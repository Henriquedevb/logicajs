const receber = require('prompt-sync')({sigint: true})
let r, c;
console.log("Olá! Vamos calcular o comprimento de uma circunferência, utilizando pi como 3,14.")
r = Number(receber('Digite o raio da circunferência: '))
c = (2*r) * 3.14
console.log("O comprimento da circunferência é:", c);
