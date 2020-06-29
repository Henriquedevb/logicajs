/*
Questao 7
Escreva um programa que receba uma matriz de números com de 5 linhas e 
2 colunas e apresente a matriz ordenada pela primeira coluna.
*/
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
            if(vet[m][0] < vet[k][0]){
                [ vet[k], vet[m] ] = [ vet[m], vet[k] ];
            }
        }
    }
}
console.clear();

mat = [
        [7, 10], 
        [17, 5],
        [31, 44],
        [44, 7],
        [16, 9]
      ];

imprime(mat);
selecaoDireta(mat);
imprime(mat);