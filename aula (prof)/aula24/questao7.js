/*
Questão 7
Uma oficina mecânica autorizada da marca XYZ deseja armazenar seus serviços em um arquivo texto com o nome do serviço e o preço. Escreva um programa que leia uma matriz, ordene pela coluna do nome do serviço e armazene em um arquivo texto de nome "servicos.txt".
*/
const receber = require('prompt-sync')({sigint: true});
const fs = require('fs');

function grava(arquivo, dados){
    fs.writeFileSync(arquivo, `${dados}\n`, {flag: "a"});
}

function ordenar(M, col){
    for(i=1; i<M.length-1; i++){
        for(j=i+1; j<M.length; j++){
            if(M[j][col] < M[i][col]){
                [ M[i], M[j] ] = [ M[j], M[i] ] 
            }
        }
    }
}

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

console.clear();
servico = [
            ['Serviço', 'Preço'],
            ['Suspensão', 300.00],
            ['Freio', 120.00],
            ['Injeção eletrônica', 250.00],
            ['Regulagem', 180.00],
            ['Funilaria', 170.00]
          ];

ordenar(servico, 0);
imprimir(servico);
for(l=0; l<servico.length; l++){
    linha = `${servico[l][0]}|${servico[l][1]}`;
    grava('servios.txt', linha);
}
