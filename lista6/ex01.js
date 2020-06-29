var prompt = require('prompt-sync')({sigint: true});
var mtx = [], num;

for (let i = 0 ; i < 10 ; i++) {
    num = Number(prompt('Preencha a matriz: '));
    mtx[i] = num;
}

console.log(mtx);