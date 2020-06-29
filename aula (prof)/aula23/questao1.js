/*
Questão 1
Faça um programa que leia o conteúdo de um arquivo e crie um arquivo com o mesmo conteúdo, mas com todas as letras minúsculas convertidas para maiúsculas. Os nomes dos arquivos serão fornecidos, via teclado, pelo usuário. A função que converte maiúscula para minúscula é o toUpperCase(). Ela é aplicada em cada caractere da string.
*/
const receber = require('prompt-sync')({sigint: true});
const fs = require('fs');

function ler(arq, M){
    arquivo = fs.readFileSync(arq, 'utf-8');
    linha = arquivo.split('\n');
    
    for(k=0; k<linha.length; k++){
        linha[k] = linha[k].trim();
        M[k] = linha[k].split("|");
    }
}

function gravar(arq, M){
    for(l=0; l<M.length; l++){
        for(c=0; c<M[l].length; c++){
            dado = M[l][c].toUpperCase();
            fs.writeFileSync(arq, dado, {flag: "a"});
        }
        fs.writeFileSync(arq, "\n", {flag: "a"});
    }
}

console.clear();

arq1 = receber("Arquivo para ler: ");
arq2 = receber("Arquivo para gravar: ");

M = [];

ler(arq1, M);
//console.log(M);
gravar(arq2, M);