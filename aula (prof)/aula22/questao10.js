/*
Questão 10 
Faça um programa que leia uma matriz com nomes de alunos e notas T1, L1 e P1, calcule a média das notas, crie mais uma coluna na matriz e armazene a média calculada. Após esse procedimento, grave todas as linhas da matriz no arquivo texto "resultados.txt". 
alunos = [ 
['Nome','T1','L1','P1'], 
['Carlos',10,9,8], 
['Maria',7,9,6], 
['Zoe',7,10,6], 
['Jose',5,7,4], 
['Joao',7,3,9], 
['Alice',5,7,10], 
['Isabel',10,8,7] 
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

function media(vet){
    return (vet[1]+vet[2]+vet[3])/3;
}

function atualiza(mat){
    for(l=0; l<mat.length; l++){
        tam = mat[l].length;
        mat[l][tam] = "Média";
        if(l>0){
            mat[l][tam] = media(mat[l]);
        }
    }
}

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

alunos = [ 
            ['Nome','T1','L1','P1'], 
            ['Carlos',10,9,8], 
            ['Maria',7,9,6], 
            ['Zoe',7,10,6], 
            ['Jose',5,7,4], 
            ['Joao',7,3,9], 
            ['Alice',5,7,10], 
            ['Isabel',10,8,7] 
         ];

atualiza(alunos);
//imprime(alunos);
gravaNoArquivo('resultados.txt', alunos);