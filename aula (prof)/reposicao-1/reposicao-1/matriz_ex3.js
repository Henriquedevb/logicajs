/*
Questão 03
Faça um programa que preenche uma matriz 4 x 4 com o produto do valor 
da linha e da coluna de cada elemento. Em seguida, imprima na tela a 
matriz.
*/
mtx=[];
console.clear();
for(l=0; l<4; l++){
    mtx[l] = [];
    for(c=0; c<4; c++){
        mtx[l][c] = l*c;
    }
}

saida = "";
for(l=0; l<4; l++){
    for(c=0; c<4; c++){
        saida += `${mtx[l][c]} \t`;
    }
    saida += "\n";
}

console.log(saida);