let receber = require('prompt-sync')();
console.clear();
let num = 0, maiornum = 0, menornum = Infinity;
console.log('Informe os números abaixo: ');
for (let k = 0; k < 10 ; k++){
    num = Number(receber());
    if(num > maiornum){
        maiornum = num;
    }
    else if(num < menornum){
        menornum = num;
    }
}
console.log(maiornum , menornum);