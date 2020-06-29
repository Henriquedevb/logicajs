const receber = require('prompt-sync')({sigint: true});
let n, barbantes;

console.clear();

n = Number(receber("Digite o nr de lados da pipa: "));

barbantes = (n * (n-3))/2;

console.log("Total de barbantes: " + barbantes);