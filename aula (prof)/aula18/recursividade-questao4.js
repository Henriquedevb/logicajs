/*
Questão 04
Crie uma função recursiva que receba dois inteiros positivos 
k e n e calcule k^n .
*/
const receber = require('prompt-sync')({sigint: true});
//zero elevado a zero = indeterminação matemática.

function potencia(k, n){
    if (k == 0 && n == 0){
        return "indeterminado";
    }
    if( n == 0 ){
        return 1;
    }
    return k * potencia(k, n-1);
}

console.clear();

k = Number(receber("Digite k: "));
n = Number(receber("Digite n: "));

console.log(`${k} elevado a ${n} é igual ${potencia(k, n)}`)