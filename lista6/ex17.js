function randomMtx() {
    let vet = [];

    for (let k = 0; k < 15; k++) {
        random = Math.floor(Math.random() * 90) + 10;
        vet[k] = random;
    }

    return vet;
};

let mtx = [];

for (let i = 0; i < 15; i++) {
    mtx[i] = randomMtx();
}

for (let c = 0; c < mtx.length; c++) {
    console.log(mtx[c]);
}

let soma = 0, media = 0, cont = 0;

for (let i = 0; i < mtx.length; i++) {
    let numAtual = mtx[i][i];
    
    if (numAtual % 2 === 0) {
        soma += numAtual;
    }
    media += numAtual;
    cont++;
};

media = Math.round(media / cont);
console.log(`Análise da diagonal principal:
A soma dos números é: ${soma}.
A média dos números é: ${media}.`);