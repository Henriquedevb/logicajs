function randomMtx() {
    let vet = [];

    for (let k = 0; k < 5; k++) {
        random = Math.floor(Math.random() * 90) + 10;
        vet[k] = random;
    }

    return vet;
};

let mtx = [];

for (let i = 0; i < 5; i++) {
    mtx[i] = randomMtx();
}

for (let c = 0; c < mtx.length; c++) {
    console.log(mtx[c]);
}

let soma = 0;

for (let i = 0; i < mtx.length; i++) {
    if (i % 2 === 1) {
        soma += mtx[i][i];
    }
}

console.log(`A soma dos elementos situados nas posições de linha e coluna ímpares da
diagonal principal é: ${soma}.`);
