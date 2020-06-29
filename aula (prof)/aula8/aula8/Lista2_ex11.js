/*
Uma P.G. (progressão geométrica) fica determinada pela sua razão (q) e
pelo primeiro termo (a 1 ). Escreva um algoritmo que seja capaz de 
determinar qualquer termo de uma P.G., dado a razão e o primeiro termo.
*/
const receber = require('prompt-sync')({sigint: true});

q = receber("Digite a razão da PG: ");
a1 = receber("Digite o termo a1: " )
n = receber("Digite qual o termo deseja calcular: ");

an = a1 * Math.pow(q, (n-1));

console.log("Termo an = " + an);