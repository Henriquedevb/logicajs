/*
Os valores de uma pesquisa de preços em várias empresas foram armazenados 
em uma matriz, tal que a primeira coluna armazena o nome dos produtos e as 
três colunas seguintes armazenam os preços encontrados no mercado. Escreva 
um programa que crie mais uma coluna na matriz que armazena o menor preço 
dentre os preços do produto. Ordene a matriz pela coluna do menor preço.
Ex.:
[
['Mouse',42,48,45],
['Webcam',100,120,129],
['Teclado',80,85,79],
['Monitor',200,220,215],
['Gabinete',100,99,125]
]
*/
const receber = require('prompt-sync')({sigint: true});

function imprime(matriz){
    saida = "";
    for(l=0; l<matriz.length; l++){
        for(c=0; c<matriz[l].length; c++){
            saida += `${matriz[l][c]} \t`;
        }
        saida += "\n";
    }
    console.log(saida);
}

function selecaoDireta(vet, col){
    for(k=0; k<vet.length-1; k++){
        for(m=k+1; m<vet.length; m++){
            if(vet[m][col] < vet[k][col]){
                [ vet[k], vet[m] ] = [ vet[m], vet[k] ];
            }
        }
    }
}

function min(vet){
    pMin = 1;
    for(k=1; k<vet.length; k++){
        if(vet[k] < vet[pMin]){
            pMin = k;
        }
    }
    return vet[pMin];
}

prod = [
        ['Mouse   ',42,48,45],
        ['Webcam  ',100,120,129],
        ['Teclado ',80,85,79],
        ['Monitor ',200,220,215],
        ['Gabinete',100,99,125]
       ];

for(l=0; l<prod.length; l++){
    tam = prod[l].length;
    prod[l][tam] = min(prod[l]);
}

console.clear();
selecaoDireta(prod, 4);

imprime(prod);