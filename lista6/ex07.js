var prompt = (require('prompt-sync'))({sigint: true});
var mtxA = [], mtxB = [], mtxC = [], mtxD = [];

function randomMtx(mtx) {
    let random = 0;

    for (let k = 0; k < 5; k++) {
        random = Math.floor(Math.random() * 10);
        mtx[k] = random;
    }
}

randomMtx(mtxA);
randomMtx(mtxB);
randomMtx(mtxC);

for (let i = 0; i < mtxA.length; i++){
    mtxD.push(mtxA[i]);
    mtxD.push(mtxB[i]);
    mtxD.push(mtxC[i]);
}
console.log(mtxA, mtxB, mtxC);
console.log(mtxD);