/*
Questao 2
Escreva um programa que ordene um vetor numérico em ordem inversa
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

vetor = [7, 3, 2, 1, 4, 16, 9, 12];
console.log(vetor);

selecaoDireta(vetor);
console.log(vetor);