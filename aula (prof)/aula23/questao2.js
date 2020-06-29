/*
Questão 2
Faça um programa que receba dois arquivos do usuário e crie um terceiro arquivo com o conteúdo dos dois primeiros juntos (o conteúdo do primeiro seguido do conteúdo do segundo).
*/
const receber = require('prompt-sync')({sigint: true});
const fs = require('fs');

function ler(arq, M){
    arquivo = fs.readFileSync(arq, 'utf-8');
    linha = arquivo.split('\n');
    
    for(k=0; k<linha.length; k++){
        if(linha[k].length>0){
            M[k] = linha[k].trim();
        }
    }
}

function gravar(arq, linha){
    for(k=0; k<linha.length; k++){
        fs.writeFileSync(arq, `${linha[k]}\n`, {flag: "a"});
    }
}

console.clear();

arq1 = receber("1º arquivo para ler: ");
arq2 = receber("2º arquivo para ler: ");
arq3 = receber("Arquivo para gravar: ");

vet1 = [];
vet2 = [];

ler(arq1, vet1);
ler(arq2, vet2);
/*console.log(vet1);
console.log(vet2);*/

gravar(arq3, vet1);
gravar(arq3, vet2);
