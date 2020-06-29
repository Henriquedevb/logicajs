const prompt = (require('prompt-sync'))({sigint: true});
let row1 = [], row2 = [], row3 = [], mtx = [], somamtx = 0;

function randomMtx(mtx) {
    let random = 0;

    for (let k = 0; k < 3; k++) {
        random = Math.floor(Math.random() * 100);
        mtx[k] = random;
    }
}

randomMtx(row1);
randomMtx(row2);
randomMtx(row3);
mtx.push(row1, row2, row3);

console.log(`[${mtx[0]}]
[${mtx[1]}]
[${mtx[2]}]`);

function diag(num, mtx) {
    num = mtx[0][0] + mtx[1][1] + mtx[2][2];
    return num;
}

console.log(`Soma da diagonal principal: ${diag(somamtx, mtx)}`);


