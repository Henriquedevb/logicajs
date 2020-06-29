var prompt = require('prompt-sync')({sigint: true});
console.clear();

function time(h, m, s){
    h = h * 3600
    m = m * 60
    return h + m + s
}

var h = Number(prompt('Horas: '));
var m = Number(prompt('Minutos: '));
var s = Number(prompt('Segundos: '));

console.log(`A conversão para segundos retornou ${time(h, m, s)} segundos.`)