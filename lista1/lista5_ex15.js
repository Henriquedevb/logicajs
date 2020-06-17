let receber = require('prompt-sync')();
console.clear();
let num = 0;
let log = 0;
console.log('Informe os oito valores abaixo: ');

for (let k = 0 ; k < 8 ; k++){
    num = Number(receber());
    log = Math.log10(num);
    console.log(log);
};