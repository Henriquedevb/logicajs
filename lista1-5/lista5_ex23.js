let receber = require('prompt-sync')();
console.clear();
let num = 0, numint = 0, menornum = Infinity;
num = (Number(receber('Informe o valor de num: ')));
console.log('Informe abaixo todos os números.');
for(let k = 0 ; k < num ; k++){
    numint = Number(receber());
    if (numint < menornum){
        menornum = numint;
    }
}
console.log(menornum);