let mtx = [];
let tamanho = Math.floor(Math.random() * 19) + 1;

function randomMtx(mtx, tamanho) {
    for (let k = 0; k < tamanho; k++) {
        random = Math.floor(Math.random() * 100);
        mtx[k] = random;
    }
    console.log(mtx);
}

randomMtx(mtx, tamanho);

console.log(mtx[tamanho - 3]);