/*
Criar um algoritmo que leia um número (NUM), 
e depois leia NUM números inteiros e imprima o maior deles.
*/
const receber = require('prompt-sync')({sigint: true});
let num, repeticoes, k, max;

num = Number(receber("Digite um número de repetições: "));

for(repeticoes=num; repeticoes>0; repeticoes--){
    k = Number(receber("Digite um número k: "));
    if(repeticoes==num){   //inicio das repetições
        max = k;
    }
    if(k > max){
        max = k;
    }
}

console.log("Máximo = " + max);
