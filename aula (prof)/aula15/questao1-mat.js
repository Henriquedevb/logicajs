/*
Questão 01
Leia uma matriz 4 x 4, conte e escreva quantos valores maiores que 10 
ela possui.
*/
const receber = require('prompt-sync')({sigint: true});
console.clear();
mtx = [
        [4, 7, 20, 5],
        [12, 18, 5, 3],
        [55, 10, 4, 1],
        [19, 2, 6, 8]
      ];
qtd = 0;
for(l=0; l<mtx.length; l++){
    for(c=0; c<mtx[l].length; c++){
        if(mtx[l][c] > 10){
            qtd++;
        }
    }
}

console.log(`Maiores que 10: ${qtd}`);
