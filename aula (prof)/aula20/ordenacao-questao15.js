/*
Questão 15
Considere a seguinte matriz:
[
[21,11,10,41], 
[43,73,19,18],  
[44,17,42,71],
[88,77,55,99]
]
Escreva um programa para ordenar cada linha da matriz.
*/
const receber = require('prompt-sync')({sigint: true});

function imprime(matriz){
    saida = "";
    for(l=0; l<matriz.length; l++){
        for(c=0; c<matriz[l].length; c++){
            saida += `${matriz[l][c]} \t`;
        }
        saida += "\n";
    }
    console.log(saida);
}

function selecaoDireta(vet){
    for(k=0; k<vet.length-1; k++){
        for(m=k+1; m<vet.length; m++){
            if(vet[m] < vet[k]){
                [ vet[k], vet[m] ] = [ vet[m], vet[k] ];
            }
        }
    }
}

M = [
        [21,11,10,41], 
        [43,73,19,18],  
        [44,17,42,71],
        [88,77,55,99]
    ];

console.clear();

for(lin=0; lin<M.length; lin++){
    selecaoDireta(M[lin]);
}

imprime(M);

