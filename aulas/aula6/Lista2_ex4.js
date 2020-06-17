/*
Criar um algoritmo para calcular e apresentar o valor 
do volume de uma lata de óleo, utilizando a fórmula:

V=π×R*R×h

Onde V ́e o volume, R ́e o raio e h ́e a altura.
*/
const receber = require('prompt-sync')({sigint: true});
let V, R, h;
R = receber("Digite o raio da base; ");
h = receber("Digire a altura da lata: ");

//V = Math.PI * R * R * h;
V = Math.PI * Math.pow(R, 2) * h

console.log("Volume = " + V);