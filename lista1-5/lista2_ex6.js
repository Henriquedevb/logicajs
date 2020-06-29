const receber = require('prompt-sync')({sigint: true})
let x, y;
x = Number(receber("Digite que horas são (apenas horas): "))
y = Number(receber("Digite os minutos: "))
console.log("Desde o início do dia (0:00h) se passaram", (x*60) + y, "minutos.")