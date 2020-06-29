/*
Questão 09
Declare uma matriz 5 x 5. Preencha com 1 a diagonal principal e 
com 0 os demais elementos. Escreva ao final a matriz obtida.
*/
mtx = [];
console.clear();
tam = 10;
for(l=0; l<tam; l++){
    mtx[l] = [];
    for(c=0; c<tam; c++){
        mtx[l][c] = 0;
        if(l==c){
            mtx[l][c] = 1;
        }
    }
}

saida = "";
for(l=0; l<tam; l++){
    for(c=0; c<tam; c++){
        saida += `${mtx[l][c]} \t`;
    }
    saida += "\n";
}

console.log(saida);