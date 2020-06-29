/*
Questao 11*/
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
alunos = [
            ['Carlos','Oliveira'],
            ['Maria','Almeida'],
            ['Zoe','Silva'],
            ['Jose','Sousa'],
            ['Joao','Souza'],
            ['Alice','Xavier'],
            ['Isabel','Damasceno']
         ]

do{
    console.clear();
    menu  = "";
    menu += "1 - Ordenar por nome\n";
    menu += "2 - Ordenar por sobrenome\n";
    menu += "3 - Sair";
    console.log(menu);
    opcao = Number(receber("Escolha uma opção: "));

    switch(opcao){
        case 1:
            console.clear();
            console.log("Ordenado por nome\n");
            selecaoDireta(alunos, 0);
            imprime(alunos);
            receber();   //espera digitar algo no teclado para o programa continuar
            break;
        case 2:
            console.clear();
            console.log("Ordenado por sobrenome\n");
            selecaoDireta(alunos, 1);
            imprime(alunos);
            receber();   //espera digitar algo no teclado para o programa continuar
            break;
        case 3:
            console.log("Obrigado por sua visita!");
            break;
        default:
            console.log("Opção inválida!");
            receber();   //espera digitar algo no teclado para o programa continuar
            break;
    }
}while(opcao != 3);