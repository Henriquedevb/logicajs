/*
Questao 4
Escreva um programa que ordene um vetor de nomes em ordem inversa à 
alfabética
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

nomes = ['Carlos','Maria','Zoé','José','João','Alice','Isabel'];
console.log(nomes);

selecaoDireta(nomes);
console.log(nomes);