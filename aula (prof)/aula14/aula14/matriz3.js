/*
Receber pelo teclado uma matriz 3x3 e imprimir a matriz.
*/
const receber = require('prompt-sync')({sigint: true});
let M=[]; //3x3

/*
colunas     0   1   2

            6  10  15     linha 0
            9   7   3     linha 1
            8   5   4     linha 2

*/
for(lin=0; lin<3; lin++){       //navegando em cada uma das linhas
    M[lin] = [];                //criando o vetor da linha 
    for(col=0; col<3; col++){   //navegando em cada uma das colunas de uma linha
        M[lin][col] = Number(receber(`valor pos. (${lin}, ${col}): `));
    }
}

saida = "";
for(lin=0; lin<3; lin++){       //navegando em cada uma das linhas
    for(col=0; col<3; col++){   //navegando em cada uma das colunas de uma linha
        saida = saida + `${M[lin][col]} \t`;
    }
    saida += "\n";
}

console.log(saida);

