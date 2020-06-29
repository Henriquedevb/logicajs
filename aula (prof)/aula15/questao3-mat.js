/*
Questão 03
Faça um programa que preenche uma matriz 4 x 4 com o produto do valor 
da linha e da coluna de cada elemento. Em seguida, imprima na tela a 
matriz.
*/
const receber = require('prompt-sync')({sigint: true});
console.clear();
mtx = [];

for(l=0; l<4; l++){
    mtx[l] = [];
    for(c=0; c<4; c++){
        mtx[l][c] = l*c;
    }
}

saida = "";

for(l=0; l<mtx.length; l++){
    for(c=0; c<mtx[l].length; c++){
        saida += `${mtx[l][c]} \t`;
    }
    saida += "\n";
}

console.log(saida);