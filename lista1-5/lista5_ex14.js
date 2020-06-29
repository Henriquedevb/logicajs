let receber = require('prompt-sync')();
console.clear();
let num = 0;
let raiz = 0;
console.log('Informe os números nas linhas abaixo.');
for (let k = 0 ; k < 15 ; k++){
    num = Number(receber());
    raiz = Math.sqrt(num);
    console.log(raiz);  
};