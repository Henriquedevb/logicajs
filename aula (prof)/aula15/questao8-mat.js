/*
Questão 08
Leia uma matriz de 3 x 3 elementos. Calcule a soma dos elementos que 
estão na diagonal secundária.
*/

mtx = [
    [ 4,  7, 20, 5],
    [12, 18,  5, 3],
    [55, 10,  4, 1],
    [19,  2,  6, 8]
];

/*
mtx = [
    [40, 17, 20], // [20] -> (0, 2) --> l+c = 2 = mtx.length - 1
    [12, 18, 15], // [18] -> (1, 1) --> l+c = 2 = mtx.length - 1
    [55, 10, 14]  // [55] -> (2, 0) --> l+c = 2 = mtx.length - 1
  ];
*/
 soma = 0;
/*
 for(l=0; l<mtx.length; l++){
     for(c=0; c<mtx[l].length; c++){
         if( (l+c) == mtx.length-1 ){
             soma += mtx[l][c];
         }
     }
 }
 */

for(k=0; k<mtx.length; k++){  
    soma += mtx[k][(mtx[k].length - 1 - k)];  
}  
console.log(`soma elementos da DS = ${soma}`);

