/*
Escreva um algoritmo que calcule o custo para 
construir um muro em torno de um terreno retangular, 
sabendo que o metro linear de muro custa R$ 70,00.  
O algoritmo deve recebercomo parâmetros de entrada, 
o lado maior e o lado menor deste terreno retangular
*/
const receber = require('prompt-sync')({sigint: true});
let l1, l2, custo;
l1 = Number(receber("Lado menor: "));
l2 = Number(receber("lado maior: "));

custo = (2*l1 + 2*l2) *  70;

console.log("Custo do muro = " + custo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
