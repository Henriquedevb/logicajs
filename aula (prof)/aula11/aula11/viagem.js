const receber = require('prompt-sync')({sigint: true});
let S, T, F, horalocal;

console.clear();

S = Number(receber());
T = Number(receber());
F = Number(receber());

horalocal = S + T + F

if(horalocal >= 24){
    horalocal = horalocal - 24;
}

if(horalocal < 0){
    horalocal = horalocal + 24;
}

console.log(horalocal);