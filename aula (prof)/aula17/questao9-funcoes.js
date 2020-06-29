/*
Questão 9
Faça uma função que receba 3 números inteiros como parâmetro, 
representando horas, minutos e segundos e os converta em segundos.
*/
const receber = require('prompt-sync')({sigint: true});

function segundos(h, m, s){
    return h*3600 + m*60 + s;
}

console.clear();

hor = Number(receber("Horas: "));
min = Number(receber("Minutos: "));
seg = Number(receber("Segundos: "));

totSeg = segundos(hor, min, seg);

console.log(`total de segundos = ${totSeg}`);
