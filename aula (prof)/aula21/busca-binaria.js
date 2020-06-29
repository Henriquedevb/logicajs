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
vetor = [ 1, 2, 3, 4, 7, 9, 12, 16 ];

resultado = buscaBinaria(vetor, 9);

if(resultado != -1){
    console.log(`Busca: Encontrei na posição ${resultado}`);
}
else{
    console.log("Busca: Não encontrei!");
}