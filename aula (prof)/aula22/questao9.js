/*
Questão 9
Faça um programa que leia uma matriz bidimensional de números e grave cada cada linha da matriz no arquivo "valores.txt". No arquivo, deverá ser utilizado o caractere "|" para separar cada valor nas
linhas.
mat = [
        [7, 10],
        [17, 5],
        [31, 44],
        [44, 7],
        [16, 9]
      ];
*/
const receber = require('prompt-sync')({sigint: true});
const fs = require('fs');

function gravaNoArquivo(arq, M){
    for(lin=0; lin<M.length; lin++){
        for(col=0; col<M[lin].length; col++){
            dado = M[lin][col];
            if(col>0){
                dado = `|${dado}` ;   
            }
            fs.writeFileSync(arq, dado, {flag: "a"});
        }
        fs.writeFileSync(arq, "\n", {flag: "a"});
    }
}

mat = [
        [7, 10],
        [17, 5],
        [31, 44],
        [44, 7],
        [16, 9]
      ];

console.clear();
gravaNoArquivo('valores.txt', mat);