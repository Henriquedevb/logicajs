/*
Ler duas matrizes A e B do tipo vetor com 15 elementos. Construir uma matriz
C, sendo esta a junção das duas outras matrizes. Desta forma, C deverá ter o
dobro de elementos, ou seja, 30. Apresentar a matriz C.
*/
const receber = require('prompt-sync')({sigint: true});
let a=[], b=[], c=[], tam=2;
console.clear();

//recebendo as matrizes A e B
for(k=0; k<tam; k++){
    a[k] = Number(receber(`Vet A - pos ${k}: `));
    b[k] = Number(receber(`Vet B - pos ${k}: `));
}

//montando a matriz C
for(k=0; k<(2*tam); k++){
    if(k<tam){
        c[k] = a[k];
    }
    else{
        c[k] = b[k-tam];
    }
}

console.log(a);
console.log(b);
console.log(c);


