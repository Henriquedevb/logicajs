/*
Questão 4
Faça um programa que receba do usuário um arquivo texto, armazene os dados em uma matriz bidimensional e imprima na tela a matriz gerada.
*/
const fs = require('fs');

function imprime(mat){
    saida = "";
    for(l=0; l<mat.length; l++){
        for(c=0; c<mat[l].length; c++){
            saida += `${mat[l][c]} \t`;
        }
        saida += "\n";
    }
    console.log(saida);
}

function lerArquivo(arq, matriz){
    arquivo = fs.readFileSync(arq, 'utf-8'); 
    linha = arquivo.split('\n');
  
    for(k=0; k<linha.length; k++){
        linha[k] = linha[k].trim();
        matriz[k] = linha[k].split("|");
    }
}
console.clear();
M = [];
lerArquivo('dados.txt', M);
//console.log(M);
imprime(M);