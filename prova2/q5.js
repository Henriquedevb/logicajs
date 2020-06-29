let mtx = [];
let tamanho = Math.floor(Math.random() * 19) + 1;

function randomMtx(mtx, tamanho) {
    for (let k = 0; k < tamanho; k++) {
        random = Math.floor(Math.random() * 100);
        mtx[k] = random;
    }
    console.log(mtx);
    console.log(`Tamanho: ${mtx.length}`);
}

randomMtx(mtx, tamanho);

console.log(mtx[Math.floor(tamanho/2)]);