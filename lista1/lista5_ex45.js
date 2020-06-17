const receber = require('prompt-sync')();
console.clear( );

let num = 1;
let i = 3;

let enesimo = receber('Digite o n-ésimo termo: ');

for(let x = 0; x < enesimo - 1; x++){
    
    num = num + i;
    i = i + 2;
}

console.log(num);