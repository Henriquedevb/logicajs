let receber = require('prompt-sync')();
console.clear();
let num = Number(0);
let cubo = Number(0);
let k = 0;
console.log('Informe os números nas linhas abaixo.');
for (k = 0 ; k < 10 ; k++){
    num = receber();
    cubo = num ** 3;
    console.log(cubo);  
};