var prompt = (require('prompt-sync'))({sigint: true});
var mtxA = [], mtxB = [];

function randomMtx(mtx) {
    let random = 0;

    for (let k = 0; k < 12; k++) {
        random = Math.floor(Math.random() * 100);
        mtx[k] = random;
    }
}

randomMtx(mtxA);

for (let i = 0; i < mtxA.length; i++) {
    if(mtxA[i] % 2 === 1) {
        mtxB[i] = mtxA[i] * 2;
    } else {
        mtxB.push(mtxA[i]);
    }
};

console.log(mtxA);
console.log(mtxB);
