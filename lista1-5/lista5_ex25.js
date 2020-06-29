let receber = require('prompt-sync')();
console.clear();
let maiornum = null, maiornum2 = null, menornum = 0;
console.log('Informe os números abaixo: ');

for (let k = 0; k < 10 ; k++){
    let num = Number(receber());
    if(num > maiornum || maiornum === null){
        maiornum = num;
    }
    else{
        if (num > maiornum2 || maiornum2 === null){
            maiornum2 = num;
        }
    }
};
console.log(maiornum , maiornum2);