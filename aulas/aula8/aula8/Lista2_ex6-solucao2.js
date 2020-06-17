/*
 Criar um algoritmo que leia um valor de hora (hora:minutos) 
 e informe (calcule) o total de minutos se passaram desde o 
 início do dia (0:00h).
*/
const receber = require('prompt-sync')({sigint: true});
let h, m, totMinutos, hora;

hora = receber("Digite a hora (hh:mm): ");

hora = new Date("01/01/2020 "+hora+":00");

h = hora.getHours();
m = hora.getMinutes();

totMinutos = h * 60 + m;

console.log("Total de minutos = " + totMinutos);