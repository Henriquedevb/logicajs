const receber = require('prompt-sync')({sigint: true});
let a1, an, n, soma;

console.clear();
a1 = Number(receber("Digite o primeiro termo: "))
an = Number(receber("Digite o termo n: "));
n = Number(receber("Digite a quantidade de termos: "));

soma = ((a1 + an)*n)/2;

console.log("Soma = " + soma);