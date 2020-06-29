/*
Questao 6
Escreva um programa que receba pelo teclado um valor N tal que (N%2==1), 
receba pelo teclado os valores de um vetor de N posições, ordene o vetor 
de N posições e retorne o valor que se encontra na posição intermediária 
do vetor ordenado.
*/
const receber = require('prompt-sync')({sigint: true});
function selecaoDireta(vet){
    for(k=0; k<vet.length-1; k++){
        for(m=k+1; m<vet.length; m++){
            if(vet[m] < vet[k]){
                [ vet[k], vet[m] ] = [ vet[m], vet[k] ];
            }
        }
    }
}
console.clear();

n = Number(receber("Digite N: "));
vetor = [];
for(k=0; k<n; k++){
    vetor[k] = Number(receber(`Receber a posição ${k}: `));
}

meio = Math.floor(n/2);
console.log(`meio = ${meio}`);

console.log(vetor);
selecaoDireta(vetor);
console.log(vetor);
console.log(`Posição do ${meio} = ${vetor[meio]}`);
