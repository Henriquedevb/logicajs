var prompt = (require('prompt-sync'))({sigint: true});
var mtxA = [], mtxB = [], mtxC = [], mtxD = [];

function randomMtx(mtx) {
    let random = 0;

    for (let k = 0; k < 6; k++) {
        random = Math.floor(Math.random() * 100);
        mtx[k] = random;
    }
}

randomMtx(mtxA);
randomMtx(mtxB);

for (let i = 0; i < mtxA.length; i++) {
    if(mtxA[i] % 2 === 0) {
        mtxD.push(mtxA[i]);
    } else {
        mtxC.push(mtxA[i]); 
    }
    if(mtxB[i] % 2 === 0) {
        mtxD.push(mtxB[i]);
    } else {
        mtxC.push(mtxB[i]); 
    }
}

console.log(mtxA, mtxB);
console.log(mtxC, mtxD);
