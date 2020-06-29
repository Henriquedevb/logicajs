// [ 7, 5, 9, 4, 6 ]
const receber = require('prompt-sync')({sigint: true});
//matriz multi dimensional é um array de arrays
console.clear();
mtx = [
        [6, 7, 9, 15],
        [7, 3, 8, 5],
        [19, 33, 41, 28],
        [7, 9, 3, 2]
      ];

/*tam = mtx.length;
tam0 = mtx[0].length;
console.log(`tamanho da matriz = ${tam}`);  
console.log(`tamanho da do vetor da posição 0 = ${tam0}`);*/ 
saida = "";
for(lin=0; lin<mtx.length; lin++){
    for(col=0; col<mtx[lin].length; col++){
        saida += `${mtx[lin][col]} \t`;
    }
    saida += "\n";
}
console.log(saida);
