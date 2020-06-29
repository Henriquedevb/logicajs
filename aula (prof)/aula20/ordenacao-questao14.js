/*
Questão 14
Escreva um programa que leia uma matriz com nome do aluno e 3 notas 
conforme a seguir:
[
['Nome','T1','L1','P1'],
['Carlos',10,9,8],
['Maria',7,9,6],
['Zoe',7,10,6],
['Jose',5,7,4],
['Joao',7,3,9],
['Alice',5,7,10],
['Isabel',10,8,7]
]
A primeira linha da matriz é apenas uma linha de cabeçalho, onde "Nome" é 
o nome do aluno, "T1" é a nota do trabalho, "L1" é a nota de lista de 
exercícios e "P1" é a nota da prova.Escreva um programa que possua um menu 
onde se possa escolher se deseja imprimir a matriz ordenada pelas colunas 
Nome, Trab, Lista ou Prova.
*/
const receber = require('prompt-sync')({sigint: true});

function imprime(matriz){
    saida = "";
    for(l=0; l<matriz.length; l++){
        for(c=0; c<matriz[l].length; c++){
            saida += `${matriz[l][c]} \t`;
        }
        saida += "\n";
    }
    console.log(saida);
}

function selecaoDireta(vet, col){
    for(k=1; k<vet.length-1; k++){
        for(m=k+1; m<vet.length; m++){
            if(vet[m][col] < vet[k][col]){
                [ vet[k], vet[m] ] = [ vet[m], vet[k] ];
            }
        }
    }
}

function cabecalho(){
    console.clear();
    saida  = "";
    saida += "************************************\n";
    saida += "Ordenação de vetores\n";
    saida += "Prof. Cícero Almeida\n"
    saida += "************************************\n";
    console.log(saida);
}

function titulo(tit){
    console.clear();
    saida  = "";
    saida += "************************************\n";
    saida += `${tit}\n`;
    saida += "************************************\n";
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

do{
    cabecalho();
    menu  = "";
    menu += "1 - Ordenar por Nome\n";
    menu += "2 - Ordenar por Trabalho\n";
    menu += "3 - Ordenar por Lista de exercício\n";
    menu += "4 - Ordenar por Prova\n";
    menu += "5 - Sair\n";
    console.log(menu);
    op = Number(receber("Escolha uma opção: "));

    switch(op){
        case 1:
            titulo("Ordenando por nome");
            selecaoDireta(alunos, 0);
            imprime(alunos);
            receber();
            break;
        case 2:
            titulo("Ordenando por nota do Trabalho");
            selecaoDireta(alunos, 1);
            imprime(alunos);
            receber();
            break;            
        case 3:
            titulo("Ordenando por nota da Lista de exercícios");
            selecaoDireta(alunos, 2);
            imprime(alunos);
            receber();
            break;
        case 4:
            titulo("Ordenando por nota da Prova");
            selecaoDireta(alunos, 3);
            imprime(alunos);
            receber();
            break;
        case 5:
            console.log("Obrigado por sua visita!");
            break;
        default:
            console.log("Opção inválida!");
            receber();
            break; 
    }
}while(op != 5);