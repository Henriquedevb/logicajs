/*
Questão 02 (matrizes)
Leia uma matriz 4 x 4, imprima a matriz e retorne a 
localização (linha e a coluna) do maior valor.
*/
console.clear();
mtx = [
        [4,  7,  20, 5],
        [12, 18, 5,  3],
        [55, 10, 5,  1],
        [19, 2,  6,  8]
      ];
lmax = 0; //inicializando a primeira linha como a de valor máximo
cmax = 0; //inicializando a primeira coluna como a de valor máximo
saida = "";
for(lin=0; lin<mtx.length; lin++){
    for(col=0; col<mtx[lin].length; col++){
        if(mtx[lin][col]  > mtx[lmax][cmax]){
            lmax = lin;
            cmax = col;
        }
        saida += `${mtx[lin][col]} \t`
    }
    saida += "\n";
}

console.log(saida);
console.log(`O máximo está na posição (${lmax}, ${cmax})`);