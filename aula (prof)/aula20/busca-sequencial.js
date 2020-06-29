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

vetor = [7, 3, 2, 1, 4, 16, 9, 12];

resultado = buscaSequencial(vetor, 5);

if(resultado != -1){
    console.log(`Busca: Encontrei na posição ${resultado}`);
}
else{
    console.log("Busca: Não encontrei!");
}