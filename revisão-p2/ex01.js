let mtx = [], soma = 0, produto = 1, meioVetor = 0;

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

mtx.length % 2 === 0 ? meioVetor = mtx.length/2 : meioVetor = Math.round(mtx.length/2);

for (let i = 0; i < meioVetor; i++) {
    soma += mtx[i]; 
}

if (mtx.length % 2 === 0) {
    for (let j = 0; j < meioVetor; j++) {
        produto = produto * mtx[j + meioVetor];
        
    }
} else {
    for (let j = 0; j < meioVetor - 1; j++) {
        produto = produto * mtx[j + meioVetor];
        
    }
}
console.log(`Soma: ${soma}, produto: ${produto}.`);