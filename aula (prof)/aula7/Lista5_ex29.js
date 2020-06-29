/*
 Escreva um algoritmo que leia 200 números inteiros e imprima 
 quantos são pares e quantos são ímpares.
*/
const receber = require('prompt-sync')({sigint: true});
let n, k, contPar, contImp, saida;
contPar = 0;
contImp = 0;

for(k=0; k<200; k++){
    n = Number(receber("Digite um número: "));
    if(n%2==0){
        contPar++;
    }
    else{
        contImp++;
    }
}
//saida = "Total de pares = " + contPar + "\nTotal de ímpares = " + contImp;
//console.log(saida);
console.log("Total de pares = " + contPar);
console.log("Total de ímpares = " + contImp)