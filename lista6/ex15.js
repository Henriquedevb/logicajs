function randomMtx() {
    let vet = [];

    for (let k = 0; k < 5; k++) {
        random = Math.floor(Math.random() * 90) + 10;
        vet[k] = random;
    }

    return vet;
};

let mtxA = [], mtxB = [];

for (let i = 0; i < 6; i++) {
    mtxA[i] = randomMtx();
    mtxB[i] = [];
}

for (let i = 0; i < mtxA.length; i++) {
    for (let j = 0; j < mtxA[i].length; j++) {
        if (mtxA[i][j] % 2 === 0) {
            mtxB[i][j] = mtxA[i][j] + 5; 
        } else {
            mtxB[i][j] = mtxA[i][j] - 4;
        }
    }
}

console.log('  Matriz A:');
console.log(mtxA);
console.log('  Matriz B:');
console.log(mtxB);