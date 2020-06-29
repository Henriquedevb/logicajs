/*
Montar uma matriz de números 3x3 recebendo 3 valores de cada linha da matriz em 
uma única linha de entrada no programa separados por espaço em branco. 
Ao final, imprimir a matriz e a soma dos valores da matriz.
*/ 
const receber = require('prompt-sync')({sigint: true});
N = 3;
mat = [];
soma = 0;

for(l=0; l<N; l++){ "3 4 5"
    linha = Number(receber(`digite a linha ${l}: `));
    mat[l] = linha.split(" ");
    for(c=0; c<N; c++){
        //mat[l][c] = parseFloat(mat[l][c]);
        mat[l][c] = Number(mat[l][c]);
    }
}

//console.log(mat);

saida = "";
for(l=0; l<N; l++){
    for(c=0; c<N; c++){
        saida += `${mat[l][c]} \t`;
        soma += mat[l][c];
    }
    saida += "\n"
}

console.log(saida);
console.log(`soma = ${soma}`);