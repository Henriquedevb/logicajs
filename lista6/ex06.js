var prompt = (require('prompt-sync'))({sigint: true});
var mtxA = [], mtxB = [], numA = 0, numB = 0;

function randomMtx(mtx) {
    let random = 0;

    for (let k = 0; k < 15; k++) {
        random = Math.floor(Math.random() * 10);
        mtx[k] = random;
    }
}

randomMtx(mtxA);

var fatorial = function fac(n) {return n<2 ? 1 : n*fac(n-1)};

for (let i = 0; i < mtxA.length; i++) {
    mtxB[i] = fatorial(mtxA[i]);
}

console.log(mtxA);
console.log(mtxB);
