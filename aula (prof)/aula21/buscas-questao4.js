const receber = require('prompt-sync')({siging: true});

function selecaoDireta(vet, campo){
    for(k=0; k<vet.length-1; k++){
        for(m=k+1; m<vet.length; m++){
            if(vet[m][campo] < vet[k][campo]){
                [ vet[k], vet[m] ] = [ vet[m], vet[k] ];
            }
        }
    }
}

function buscaSequencial(vet, elem, campo){
    for(k=0; k<vet.length; k++){
        if(vet[k][campo] == elem){
            console.log(`Total de iterações = ${k}`);
            return k;
        }
    }
    console.log(`Total de iterações = ${k}`);
    return -1;
}

function buscaOrdenada(vet, elem, campo){
    for(k=0; k<vet.length; k++){
        if(vet[k][campo] == elem){
            console.log(`Total de iterações = ${k}`);
            return k;
        }
        if(vet[k][campo] > elem){
            console.log(`Total de iterações = ${k}`);
            return -1;
        }
    }
    console.log(`Total de iterações = ${k}`);
    return -1;
}

function buscaBinaria(vet, elem, campo){
    // ordenar o vetor
    k = 0;
    ini = 0;
    fim = vet.length;
    while(ini <= fim){
        ++k;
        meio = Math.floor((ini+fim)/2);
        if(elem < vet[meio][campo]){
            fim = meio - 1;
        }
        else if(elem > vet[meio][campo]){
            ini = meio + 1;
        }
        else if(elem == vet[meio][campo]){
            console.log(`Total de iterações = ${k}`);
            return meio;
        }
    }
    console.log(`Total de iterações = ${k}`);
    return -1;
}

function resultado(res, tipo){
    if(res != -1){
        console.log(`Busca ${tipo}: Encontrei na posição ${res}`);
    }
    else{
        console.log(`Busca ${tipo}: Não encontrei!`);
    }
}

function entrada(campo){
    if(campo == 0){
        dado = receber("Digite o nome a consultar: ");
    }
    else{
        campo = 1;
        dado = receber("Digite o sobrenome a consultar: ");
    }
    return dado;
}

do{
    console.clear();
    alunos = [
                ['Carlos','Oliveira'],
                ['Maria','Almeida'],
                ['Zoe','Silva'],
                ['Jose','Sousa'],
                ['Joao','Souza'],
                ['Alice','Xavier'],
                ['Isabel','Damasceno']
             ];

    menu  = "";
    menu += "1 - Busca sequencial\n";
    menu += "2 - Busca ordenada\n";
    menu += "3 - Busca binária\n";
    menu += "4 - Sair\n"
    console.log(menu);

    op = Number(receber("Digite uma opção: "));

    campo = "";
    if(op>=1 && op<=3){
        menu2  = "0 - por nome\n" ;
        menu2 += "1 - por sobrenome\n";
        console.log(menu2);
        campo = Number(receber("Digite [0/1]: "));
        dado = entrada(campo);
    }

    switch(op){
        case 1:
            console.clear();
            res = buscaSequencial(alunos, dado, campo)
            resultado(res, "sequencial");
            receber();
            break;
        case 2:
            console.clear();
            selecaoDireta(alunos, campo);
            res = buscaOrdenada(alunos, dado, campo)
            resultado(res, "ordenada");
            receber();
            break;
        case 3:
            console.clear();
            selecaoDireta(alunos, campo);
            res = buscaBinaria(alunos, dado, campo)
            resultado(res, "binária");
            receber();                
            break;
        case 4:
            console.log("Obrigado por sua visita!");
            break;
        default:
            console.log("Opção inválida!");
            receber();
            break; 
    }
}while(op != 4);