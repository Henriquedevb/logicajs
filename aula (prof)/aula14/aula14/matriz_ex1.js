/*
Questão 01 (matrizes)
Leia uma matriz 4 x 4, conte e escreva quantos valores 
maiores que 10 ela possui.
*/
let mtx, qtd=0;
console.clear();
mtx = [
        [4,  7,  20, 5],
        [12, 18, 5,  3],
        [55, 10, 5,  1],
        [19, 2,  6,  8]
      ];

for(l=0; l<mtx.length; l++){  // navegando por todas as linhas
    for(c=0; c<mtx[l].length; c++){ //navegando por todas as colunas da linha l
        if(mtx[l][c] > 10){
            qtd++;
        }
    }
}

console.log(`maiores que 10: ${qtd}`);