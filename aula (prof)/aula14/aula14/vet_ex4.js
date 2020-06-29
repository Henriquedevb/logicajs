/*
Questão 04
Faça um programa que receba do usuário um vetor com 10 posições. 
Em seguida deverá ser impresso o maior e o menor elemento do vetor.
*/
let vet=[5, 7, 9, 22, 41, 17, 12, 15, 4, 2], max, min;
console.clear();

max = vet[0];   //inicializando o valor máximo
min = vet[0];   //inicializando o valor mínimo

for(k=0; k<vet.length; k++){
    if( vet[k] > max ){
        max = vet[k];
    }
    if( vet[k] < min){
        min = vet[k];
    }
}

console.log(`maior = ${max}  |  menor = ${min}`);

