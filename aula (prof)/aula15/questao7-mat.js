/*
Questão 07
Leia uma matriz de 3 x 3 elementos. Calcule a soma dos elementos que 
estão na diagonal principal.
*/
/*
mtx = [
    [ 4,  7, 20, 5],
    [12, 18,  5, 3],
    [55, 10,  4, 1],
    [19,  2,  6, 8]
];
*/
mtx = [
   [40, 17, 20],
   [12, 18, 15],
   [55, 10, 14]
 ];

soma = 0;

/*
for(l=0; l<mtx.length; l++){
    for(c=0; c<mtx[l].length; c++){
        if(c == l){
            soma += mtx[l][c];
        }
    }
}*/

for(k=0; k<mtx.length; k++){
    soma += mtx[k][k];
}

console.log(`soma elementos da DP = ${soma}`);