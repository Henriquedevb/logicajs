const receber = require('prompt-sync')();
let A = 0, B = 0, produto = 0;

A = Number(receber("Digite o valor de A: "));
B = Number(receber("Digite o valor de B: "));

for(let k = 0; k < B; k++){
    produto = produto + A;
}
console.log('Produto: ' + produto);
