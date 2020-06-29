const receber = require('prompt-sync')({siging: true});

function selecaoDireta(vet){
    for(k=0; k<vet.length-1; k++){
        for(m=k+1; m<vet.length; m++){
            if(vet[m] < vet[k]){
                [ vet[k], vet[m] ] = [ vet[m], vet[k] ];
            }
        }
    }
}

function buscaSequencial(vet, elem){
    for(k=0; k<vet.length; k++){
        if(vet[k] == elem){
            console.log(`Total de iterações = ${k}`);
            return k;
        }
    }
    console.log(`Total de iterações = ${k}`);
    return -1;
}

function buscaOrdenada(vet, elem){
    for(k=0; k<vet.length; k++){
        if(vet[k] == elem){
            console.log(`Total de iterações = ${k}`);
            return k;
        }
        if(vet[k] > elem){
            console.log(`Total de iterações = ${k}`);
            return -1;
        }
    }
    console.log(`Total de iterações = ${k}`);
    return -1;
}

function buscaBinaria(vet, elem){
    // ordenar o vetor
    k = 0;
    ini = 0;
    fim = vet.length;
    while(ini <= fim){
        ++k;
        meio = Math.floor((ini+fim)/2);
        if(elem < vet[meio]){
            fim = meio - 1;
        }
        else if(elem > vet[meio]){
            ini = meio + 1;
        }
        else if(elem == vet[meio]){
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

do{
    console.clear();
    vetor = ['cafe', 'leite', 'acucar', 'arroz', 'feijao', 'macarrao'];

    menu  = "";
    menu += "1 - Busca sequencial\n";
    menu += "2 - Busca ordenada\n";
    menu += "3 - Busca binária\n";
    menu += "4 - Sair\n"
    console.log(menu);
    
    op = Number(receber("Digite uma opção: "));
    if(op>=1 && op<=3){
        nome = receber("Digite um produto a consultar: ");
    }

    switch(op){
        case 1:
            console.clear();
            res = buscaSequencial(vetor, nome);
            resultado(res, "sequencial");
            receber();
            break;
        case 2:
            console.clear();
            selecaoDireta(vetor);
            res = buscaOrdenada(vetor, nome);
            resultado(res, "sequencial");
            receber();
            break;
        case 3:
            console.clear();
            selecaoDireta(vetor);
            res = buscaBinaria(vetor, nome);
            resultado(res, "sequencial");
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