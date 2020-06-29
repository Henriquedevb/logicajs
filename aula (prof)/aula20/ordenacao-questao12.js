/*
Questão 12
Escreva um programa que receba uma matriz com nome do aluno e 3 notas 
conforme a seguir:
[
['Carlos',10,9,8],
['Maria',7,9,6],
['Zoe',7,10,6],
['Jose',5,7,4],
['Joao',7,3,9],
['Alice',5,7,10],
['Isabel',10,8,7]
]
Calcule a média de cada aluno e armazene na repectiva linha de notas do 
aluno e ordene por Nome do aluno e por média .
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
    for(k=0; k<vet.length-1; k++){
        for(m=k+1; m<vet.length; m++){
            if(vet[m][col] < vet[k][col]){
                [ vet[k], vet[m] ] = [ vet[m], vet[k] ];
            }
        }
    }
}
console.clear();

notas = [
            ['Carlos',10,9,8],
            ['Maria',7,9,6],
            ['Zoe',7,10,6],
            ['Jose',5,7,4],
            ['Joao',7,3,9],
            ['Alice',5,7,10],
            ['Isabel',10,8,7]
        ];

for(l=0; l<notas.length; l++){
    media = 0;
    tam = notas[l].length;
    for(c=1; c<tam; c++){
        media += notas[l][c];
    }
    notas[l][tam] = media/(tam-1);
}

do{
    console.clear();
    menu  = "";
    menu += "1 - Ordenar por nome\n";
    menu += "2 - Ordenar por média\n";
    menu += "3 - Sair\n";
    console.log(menu);
    op = Number(receber("Escolha uma opção: "));

    switch(op){
        case 1:
            console.clear();
            console.log("Ordenado por nome:");
            selecaoDireta(notas, 0);
            imprime(notas);
            receber();
            break;
        case 2:
            console.clear();
            console.log("Ordenado por média:");
            selecaoDireta(notas, 4);
            imprime(notas);
            receber();
            break;
        case 3:
            console.log("Obrigado por sua visita!");;
            break;
        default:
            console.log("Opção inválida!");
            receber();
            break;
    }
}while(op != 3);