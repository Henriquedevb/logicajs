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

let media = 0, cont = 0, linha = 1, coluna = 0;

for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
        media += mtx[i][j + 1];   
        cont++;     
    }
}

media = Math.floor(media / cont - 1);
console.log(media);