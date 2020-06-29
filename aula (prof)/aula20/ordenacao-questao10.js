/*
Questao 10
Escreva um programa que receba uma matriz, tal que a primeira coluna contém o nome 
de um aluno e a segunda coluna contém o sobrenome apresente a matriz 
ordenada pelo sobrenome.*/

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
            if(vet[m][1] < vet[k][1]){
                [ vet[k], vet[m] ] = [ vet[m], vet[k] ];
            }
        }
    }
}
console.clear();
alunos = [
            ['Carlos','Oliveira'],
            ['Maria','Almeida'],
            ['Zoe','Silva'],
            ['Jose','Sousa'],
            ['Joao','Souza'],
            ['Alice','Xavier'],
            ['Isabel','Damasceno']
         ]

selecaoDireta(alunos);

imprime(alunos);