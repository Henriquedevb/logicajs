const receber = require('prompt-sync')({sigint: true})
let v, t, d, l;
v = Number(receber("Informe a velocidade média da viagem, em km/h: "))
t = Number(receber("Informe o tempo gasto na viagem, em horas: "))
d = t * v
l = d / 12
console.log("A quantidade de litros de combustíveis gastos na viagem foram", l, "litros.")