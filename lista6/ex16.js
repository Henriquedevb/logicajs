function randomMtx() {
    let vet = [];

    for (let k = 0; k < 4; k++) {
        random = Math.floor(Math.random() * 90) + 10;
        vet[k] = random;
    }

    return vet;
};

let mtx = [], soma = 0;

for (let i = 0; i < 4; i++) {
    mtx[i] = randomMtx();
}

console.log(mtx);

for (let i = 0; i < mtx.length; i++) {
    soma += mtx[i][i];
};

console.log(`Soma da diagonai principal: ${soma}.`);
