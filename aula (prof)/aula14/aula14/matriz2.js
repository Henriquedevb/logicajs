/*
Receber pelo teclado uma matriz 3x3 e imprimir a matriz.
*/
const receber = require('prompt-sync')({sigint: true});
let mtx=[];

console.clear();

for(lin=0; lin<3; lin++){
    mtx[lin] = [];
    for(col=0; col<3; col++){
        mtx[lin][col] = Number(receber(`Valor da pos. (${lin}, ${col}): `));
    }
}

saida = "";
for(lin=0; lin<3; lin++){
    for(col=0; col<3; col++){
        saida += `${mtx[lin][col]} \t`;
    }
    saida += "\n";
}

console.log(saida);