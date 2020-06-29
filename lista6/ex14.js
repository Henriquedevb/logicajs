let mtx = [];

function randomMtx(mtx) {
    for (let k = 0; k < 25; k++) {
        random = Math.floor(Math.random() * 100);
        mtx[k] = random;
    }
}

randomMtx(mtx);
console.log(mtx);
mtx.reverse();
console.log(mtx);