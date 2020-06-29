const receber = require('prompt-sync')({sigint: true});    

let x, y;

x = Number(receber("Digite um número: "));

if(x <= 0){
    y = x * (-1);
    console.log("O módulo do número é:", y);
}

else{
    console.log("O módulo do número é:", x);
}