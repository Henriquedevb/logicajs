/*
Questao 5
Escreva um programa que ordene um vetor de 5 posições e retorne o valor 
que se encontra na posição 2 do vetor ordenado.
*/
function selecaoDireta(vet){
    for(k=0; k<vet.length-1; k++){
        for(m=k+1; m<vet.length; m++){
            if(vet[m] > vet[k]){
                [ vet[k], vet[m] ] = [ vet[m], vet[k] ];
            }
        }
    }
}
console.clear();

vetor = [7, 3, 2, 1, 4];
console.log(vetor);
selecaoDireta(vetor);
console.log(vetor);
console.log(`Posição 2 = ${vetor[2]}`);