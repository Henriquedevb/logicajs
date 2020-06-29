
const receber = require('prompt-sync')({sigint: true});
const fs = require('fs');

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

function grava(arq, linha){
    fs.writeFileSync(arq, `${linha[0]}|${linha[1]}`, {flag: "a"});
}

function encontraMax(M){
    lMax = 0;
    for(lin=0; lin<M.length; lin++){
        if(M[lin][1] > M[lMax][1]){
            lMax = lin;
        }
    }
    return lMax;
}

console.clear();
M = [];

ler('cidades.txt', M);
//console.log(M);

max = encontraMax(M);
grava('saida-quetao3.txt', M[max]);