let receber = require('prompt-sync')();
let num = Number(receber('Informe o num: '));
let x = 0;

for (k = 0 ; k < num ; k++){
    x = x + 1 
    if (x % 3 === 0){
        console.log(x , 'é múltipo de 3.');
    }
    if (x % 5 === 0){
        console.log(x , 'é múltipo de 5.');
    }
}