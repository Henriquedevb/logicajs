/*
Faça um programa que leia o arquvo gerado na questão 15 e permita gerar outro arquivo de nome "resultado-final.txt" que contenha ao lado de cada aluno a menção "aprovado" (media>=5) ou "reprovado" (media<5). O arquivo deve ainda estar ordenado por nome.
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
        linha = `${M[k][0]}|${M[k][M[k].length-1]}\n`;
        fs.writeFileSync(arq, linha, {flag: "a"});
    }
}

function atualiza(M){
    for(l=0; l<M.length; l++){
        tam = M[l].length;
        M[l][tam] = "reprovado";
        if(M[l][tam-1]>=5){
            M[l][tam] = "aprovado";
        }
    }
}

console.clear();
M = [];
ler('notas.txt', M);
atualiza(M);
ordenar(M, 0);
//imprimir(M);
gravar('resultado-final.txt', M);