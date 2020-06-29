/*
Questão 04
Leia duas matrizes 4 x 4 e escreva uma terceira com os maiores valores 
de cada posição das matrizes lidas.
*/
const receber = require('prompt-sync')({sigint: true});
console.clear();
A = [
        [4, 7, 20, 5],
        [12, 18, 5, 3],
        [55, 10, 4, 1],
        [19, 2, 6, 8]
    ];

B = [
        [1, 8, 30, 1],
        [22, 3, 25, 3],
        [75, 11, -1, 0],
        [15, 51, 3, 5]
    ];
    
C = [];

//montando a matriz
for(l=0; l<A.length; l++){
    C[l] = [];
    for(c=0; c<A[l].length; c++){
        if(A[l][c] > B[l][c]){
            C[l][c] = A[l][c];
        }
        else{
            C[l][c] = B[l][c];
        }
    }
}

//imprimindo a matriz C

saida = "";
for(lin=0; lin<C.length; lin++){
    for(col=0; col<C[lin].length; col++){
        saida += `${C[lin][col]} \t`;
    }
    saida += "\n";
}

console.log(saida);