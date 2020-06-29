/*
Questão 11
Escreva uma função recursiva que exibe todos os elementos em um array 
de inteiros, separados por espaço.
*/
const receber = require('prompt-sync')({sigint: true});
function imparrRec(arr, pos, saida){
    saida += `${arr[pos]} `;
    if(pos < arr.length-1){
        return imparrRec(arr, pos+1, saida);
    }
    console.log(saida);
}

console.clear();

vet = [8, 7, 5, 10, 20, 6];

imparrRec(vet, 0, "");