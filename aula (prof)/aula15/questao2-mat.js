/*
Questão 02
Leia uma matriz 4 x 4, imprima a matriz e retorne a localização 
(linha e a coluna) do maior valor.
*/
const receber = require('prompt-sync')({sigint: true});
console.clear();
mtx = [
        [4, 7, 20, 5],
        [12, 18, 5, 3],
        [55, 10, 4, 1],
        [19, 2, 6, 8]
      ];

lmax = 0;
cmax = 0;

saida = "";
for(l=0; l<mtx.length; l++){
    for(c=0; c<mtx[l].length; c++){
        if(mtx[l][c] > mtx[lmax][cmax]){
            lmax = l;
            cmax = c;
        }
        saida += `${mtx[l][c]} \t`;
    }
    saida += "\n";
}

console.log(saida);
console.log(`Posição do valor máximo: (${lmax}, ${cmax})`);