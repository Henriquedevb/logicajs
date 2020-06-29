const receber = require('prompt-sync')({sigint: true})
let r, c;
console.log("Olá! Vamos calcular a área de uma circunferência, utilizando pi como 3,14.")
r = Number(receber('Digite o raio da circunferência, em m: '))
a = 3.14 * (r*r)
console.log("A área da circunferência é:", a, "m²");