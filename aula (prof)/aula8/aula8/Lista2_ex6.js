/*
 Criar um algoritmo que leia um valor de hora (hora:minutos) 
 e informe (calcule) o total de minutos se passaram desde o 
 início do dia (0:00h).
*/
const receber = require('prompt-sync')({sigint: true});
let hora, min, totMinutos;

hora = Number(receber("Digite as horas: "));
min = Number(receber("Digite os minutos: "));

totMinutos = hora * 60 + min;

console.log("Total de minutos = " + totMinutos);
