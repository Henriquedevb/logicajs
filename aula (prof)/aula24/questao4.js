/*
Faça um programa que leia um arquivo em que contém em cada linha o nome de uma cidade e o seu número de habitantes. O programa deverá gerar dois arquivos de saída. O primeiro deverá conter os dados ordenados por nomes de cidade. O segundo arquivo deverá conter os dados gravados em ordem crescente de população.
*/
const receber = require('prompt-sync')({sigint: true});
const fs = require('fs');

function imprimir(M){
    saida = "";
    for(l=0; l<M.length; l++){
        for(c=0; c<M[l].length; c++){
            saida += `${M[l][c]} \t`;
        }
        saida += "\n";
    }
    console.log(saida);
}

function ordenar(M, col){
    for(i=0; i<M.length-1; i++){
        for(j=i+1; j<M.length; j++){
            if(M[j][col] < M[i][col]){
                [ M[i], M[j] ] = [ M[j], M[i] ] 
            }
        }
    }
}

function ler(arq, M){
    arquivo = fs.readFileSync(arq, 'utf-8');
    linha = arquivo.split('\n');

    for(l=0; l<linha.length; l++){
        M[l] = linha[l].trim().split("|");
        for(c=1; c<M[l].length; c++){
            M[l][c] = Number(M[l][c]);
        }
    }
}

function gravar(arq, M){
    for(k=0; k<M.length; k++){
        linha = M[k];
        fs.writeFileSync(arq, `${linha[0]}|${linha[1]}\n`, {flag: "a"});
    }
}

console.clear();

matriz = [];
ler('cidades.txt', matriz);
//ordenar por nome
ordenar(matriz, 0);
gravar('cidades-nome.txt', matriz);
ordenar(matriz, 1);
gravar('cidades-populacao.txt', matriz);
console.log("Fim do processamento...");