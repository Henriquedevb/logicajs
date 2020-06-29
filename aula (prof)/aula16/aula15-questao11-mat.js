console.clear();
mtx = [
          [ 5, -8,  1],
          [ 1,  2,  5],
          [25, 10,  8]
      ];

vet = [0, 0, 0];
for(l=0; l<mtx.length; l++){
    for(c=0; c<mtx[l].length; c++){
        vet[c] += mtx[l][c];
    }
}

console.log(vet);