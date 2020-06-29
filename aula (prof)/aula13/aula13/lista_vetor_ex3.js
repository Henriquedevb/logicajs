/*
Ler duas matrizes A e B do tipo vetor com 20 elementos. Construir uma matriz
C, onde, cada elemento de C é a subtração do elemento correspondente de A por
B. Apresentar a matriz C.
*/
const receber = require('prompt-sync')({sigint: true});
let a=[], b=[], c=[];

console.clear();

for(k=0; k<3; k++){
    a[k] = Number(receber(`Vetor A - posição ${k}: `));
    b[k] = Number(receber(`Vetor B - posição ${k}: `));
    c[k] = a[k] - b[k];
}

console.clear();
/*console.log("A \t B \t C");
for(k=0; k<a.length; k++){
    console.log(`${a[k]} \t ${b[k]} \t ${c[k]}`);
}*/

console.log(`A = ${a}`);
console.log(`B = ${b}`);
console.log(`C = ${c}`);



