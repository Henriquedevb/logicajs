/*
Questão 5
Faça um programa que receba do usuário um arquivo texto com nomes de alunos e notas T1, L1 e P1, armazene os dados em uma matriz bidimensional e imprima na tela a matriz gerada com média das três notas ao final de cada linha de impressão.
*/
const fs = require('fs');

function imprime(mat){
    saida = `${mat[0][0]} \t${mat[0][1]} \t${mat[0][2]} \t${mat[0][3]} \tMédia\n`;
    for(l=1; l<mat.length; l++){
        for(c=0; c<mat[l].length; c++){
            saida += `${mat[l][c]} \t`;
        }
        saida += `${media(mat[l])}\n`;
    }
    console.log(saida);
}

function media(arr){
    return (arr[1] + arr[2] + arr[3])/3;
}

function lerArquivo(arq, matriz){
    arquivo = fs.readFileSync(arq, 'utf-8'); 
    linha = arquivo.split('\n');
  
    for(l=0; l<linha.length; l++){
        matriz[l] = linha[l].split("|");
        if(l>0){  //não converte o cabeçalho
            for(c=1; c<matriz[l].length; c++){
                matriz[l][c] = Number(matriz[l][c]);
            }
        }
    }
}
console.clear();

M = [];

lerArquivo('alunos.txt', M);
imprime(M);