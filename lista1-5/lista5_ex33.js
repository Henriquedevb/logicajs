const receber = require('prompt-sync')();
let A = 0, B = 0, pow = 0;

A = Number(receber("Digite o valor de A: "));
B = Number(receber("Digite o valor de B: "));
pow = A;

for(let k = 0; k < (B-1); k++){
    pow = pow * A;
}
console.log('Produto: ' + pow);
