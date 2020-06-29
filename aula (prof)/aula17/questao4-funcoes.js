/*
Questão 4
Faça uma função para verificar se um número é positivo ou negativo. 
Sendo que o valor de retorno será 1 se positivo, -1 se negativo e 0 
se for igual a 0.
*/
const receber = require('prompt-sync')({sigint: true});

function ehPositivo(a){
    retorno = 0;
    if(a > 0){
        retorno = 1;
    }
    if(a < 0){
        retorno = -1;
    }
    return retorno;
}

n = Number(receber("Digite n: "));

console.log(ehPositivo(n));
