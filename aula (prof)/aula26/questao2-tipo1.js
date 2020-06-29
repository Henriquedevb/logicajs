/*Questão 2
Faça um programa para ler as dimensões em metros de uma piscina em formato de paralelepípedo (comprimento c, largura l, profundidade p), Imprima o volume em litros de água que essa piscina comporta, sabendo que 1m³ = 1000 litros
*/
const receber = require('prompt-sync')({sigint: true});

c = Number(receber('Digite o comprimento: '));
l = Number(receber('Digite a largura: '));
p = Number(receber('Digite a profundidade: '));

volume = c*l*p*1000;

console.log(`Volume = ${volume}`);