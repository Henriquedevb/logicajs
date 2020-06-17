let receber = require('prompt-sync')();
console.clear();

let num = 0, maiornum = 0;
console.log('Informe os números abaixo (deseje 0 ao terminar).');
while(true){
    num = Number(receber());
    if(num === 0){
        break;
    }
    else{
        if(num > maiornum){
            maiornum = num;
        }
    }
}
console.log('O maior número é:', maiornum);