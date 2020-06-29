/*
Questão 1
Escreva um programa que ordene um vetor numérico em ordem direta
*/
//seleção direta  (selection sort)
function selecaoDireta(vet){
    for(k=0; k<vet.length-1; k++){
        posMin = k;
        for(m=k+1; m<vet.length; m++){
            if(vet[m] < vet[posMin]){
                posMin = m;
            }
        }
        /*tmp = vet[k];
        vet[k] = vet[posMin];
        vet[posMin] = tmp;*/
        [ vet[k], vet[posMin] ] = [ vet[posMin], vet[k] ];
    }
}
console.clear();

vetor = [7, 3, 2, 1, 4, 16, 9, 12];
console.log(vetor);

selecaoDireta(vetor);
console.log(vetor);
