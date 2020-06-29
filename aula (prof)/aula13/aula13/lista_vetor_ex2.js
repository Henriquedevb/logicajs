/*
Ler uma matriz A tipo vetor com 10 elementos. Construir uma matriz B de
mesmo tipo, sendo que cada elemento de B deverá ser a metade de cada
elemento de A. Apresentar os elementos das matrizes A e B.
*/
const receber = require('prompt-sync')({sigint: true});
let A, B;
A = [];
B = [];
console.clear();

//entrada
for(k=0; k<5; k++){
    A[k] = Number(receber(`posição ${k}: `));
    B[k] = A[k]/2;
}

//saída
console.clear();
/*console.log("A \t B");
for(k=0; k<10; k++){
    console.log(`${A[k]} \t ${B[k]}`);
}*/
console.log(`A = ${A}`);
console.log(`B = ${B}`);
