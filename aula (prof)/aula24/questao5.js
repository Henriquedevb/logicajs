/*
Uma faculdade deseja armazenar o nome de um aluno e as notas T1 (trabalho), L1 (lista de exercícios) e P1 (prova). Escreva um programa que permita receber esses dados pelo teclado e armazenar em um arquivo texto de nome "notas.txt". Ao receber cada linha pelo teclado, o programa deve calcular a média das notas e adicionar no arquivo texto o nome do aluno as notas T1, L1, P1 e também a média do aluno. O programa deve encerrar ao digitar "fim" para o nome do aluno
*/
const receber = require('prompt-sync')({sigint: true});
const fs = require('fs');

function grava(arquivo, dados){
    fs.writeFileSync(arquivo, `${dados}\n`, {flag: "a"});
}

do{
    console.clear();
    nome = receber("Digite o nome do aluno: ");
    if(nome != "fim"){
        entrada = receber("Digite T1, L1, P1 (separado por espaço): ");
        nota = entrada.split(" ");
        T1 = Number(nota[0].trim());
        L1 = Number(nota[1].trim());
        P1 = Number(nota[2].trim());
        media = (T1+L1+P1)/3;
        linha = `${nome}|${T1}|${L1}|${P1}|${media}`;
        grava('notas.txt', linha);
    }
}while(nome != "fim");
console.log("Fim do processamento!");