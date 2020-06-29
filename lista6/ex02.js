var prompt = (require('prompt-sync'))({sigint: true});
var mtxA = [], mtxB = [], random = 0, num = 0;

// algoritmo pra preencher a matriz
for (let k = 0; k < 10; k++) {
    random = Math.floor(Math.random() * 100);
    mtxA[k] = random;
}

for (let i = 0; i < mtxA.length; i++) {
    num = mtxA[i];
    mtxB[i] = num / 2;
}

console.log(mtxA, mtxB);

