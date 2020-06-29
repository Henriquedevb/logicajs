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

do{
    console.clear();
    prod = [
                ['café', 10.57],
                ['açúcar', 15.05],
                ['leite', 3.22],
                ['feijão', 12.47],
                ['arroz', 17.22]
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
        menu2  = "0 - por produto\n" ;
        menu2 += "1 - por preço\n";
        console.log(menu2);

        campo = Number(receber("Digite [0/1]: "));

        if(campo == 0){
            dado = receber("Digite o produto a consultar: ");
        }
        else{
            campo = 1;
            dado = Number(receber("Digite um preço a consultar: "));
        }

        switch(op){
            case 1:
                console.clear();
                res = buscaSequencial(prod, dado, campo)
                resultado(res, "sequencial");
                receber();
                break;
            case 2:
                console.clear();
                selecaoDireta(prod, campo);
                res = buscaOrdenada(prod, dado, campo)
                resultado(res, "ordenada");
                receber();
                break;
            case 3:
                console.clear();
                selecaoDireta(prod, campo);
                res = buscaBinaria(prod, dado, campo)
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

    }
}while(op != 4);