let receber = require('prompt-sync')();
console.clear();
let num = 0, numint = 0, maiornum = 0;
num = (Number(receber('Informe o valor de num: ')));
console.log('Informe abaixo todos os números.');
for(let k = 0 ; k < num ; k++){
    numint = Number(receber());
    if (numint > maiornum){
        maiornum = numint;
    }
}
console.log(maiornum);