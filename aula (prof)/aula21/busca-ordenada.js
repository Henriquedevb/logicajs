function selecaoDireta(vet){
    for(k=0; k<vet.length-1; k++){
        for(m=k+1; m<vet.length; m++){
            if(vet[m] < vet[k]){
                [ vet[k], vet[m] ] = [ vet[m], vet[k] ];
            }
        }
    }
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

//vetor = [7, 3, 2, 1, 4, 16, 9, 12];
vetor = [ 1, 2, 3, 4, 7, 9, 12, 16 ];

//console.log(vetor);

resultado = buscaOrdenada(vetor, 9);

if(resultado != -1){
    console.log(`Busca: Encontrei na posição ${resultado}`);
}
else{
    console.log("Busca: Não encontrei!");
}