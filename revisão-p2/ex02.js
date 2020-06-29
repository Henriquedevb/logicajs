let mtx = [], soma = 0, produto = 1;

function randomMtx(mtx) {
    let random = 0, tamanho = 0;

    while (true) {
        tamanho = Math.floor(Math.random() * 10);

        if (tamanho >= 5) {
            break;
        }
    }

    for (let k = 0; k < tamanho; k++) {
        random = Math.floor(Math.random() * 9) + 1;
        mtx[k] = random;
    }
    console.log(mtx);
    console.log(`Tamanho do vetor: ${mtx.length}\n`)
}
randomMtx(mtx);

soma = mtx[1] + mtx[mtx.length - 2];
produto = mtx[0] * mtx[mtx.length - 3];

console.log(`Soma: ${soma}, produto: ${produto}.`);