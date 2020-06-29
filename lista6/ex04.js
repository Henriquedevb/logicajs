const prompt = (require('prompt-sync'))({sigint: true});
var mtxA = [], mtxB = [], mtxC = [], numA = 0, numB = 0;

function randomMtx(mtx) {
    for (let k = 0; k < 15; k++) {
        random = Math.floor(Math.random() * 100);
        mtx[k] = random;
    }
}

randomMtx(mtxA);
randomMtx(mtxB);

for (let i = 0; i < mtxA.length; i++) {
    numA = mtxA[i];
    numB = mtxB[i];
    mtxC.push(numA, numB);
}
console.log(mtxA);
console.log(mtxB);
console.log(mtxC);