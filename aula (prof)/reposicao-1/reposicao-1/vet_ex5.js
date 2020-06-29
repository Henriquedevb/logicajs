/*
Crie um programa que lê 6 valores inteiros e, em seguida, mostre na 
tela os valores lidos na orde inversa.
*/
const receber = require('prompt-sync')({sigint: true});
console.clear();
//vet = [5, 7, 9, 22, 41, 17];
vet = [];
for(k=0; k<6; k++){
    vet[k] = Number(receber(`Posição ${k}: `));
}


saida = "";
for(k=vet.length-1; k>=0; k--){
    saida = saida + `${vet[k]}, `;
}

console.log(saida);