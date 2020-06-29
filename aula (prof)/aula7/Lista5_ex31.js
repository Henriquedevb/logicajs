/*
 Escreva um algoritmo que leia 20 números e imprima a soma dos 
 positivos e o total de números negativos.
*/
const receber = require('prompt-sync')({sigint: true});
let n, k, contNeg, somaPos;
contNeg = 0;
somaPos = 0;
for(k=0; k<20; k++){
    n = Number(receber("Digite um número: "));
    if(n >= 0){
        somaPos = somaPos + n; //acumulador
    }
    else{
        contNeg++;              //contador
    }
}
console.log("Soma dos positivos = " + somaPos);
console.log("Total de números negativos = " + contNeg)