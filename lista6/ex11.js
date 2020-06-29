const prompt = (require('prompt-sync'))({sigint: true});
let mtxA = [], mtxB = [], mtxC = [];

for (let i = 0; i < 6; i++) {
    while(true) {
        mtxA[i] = Number(prompt('Preencha a matriz A com números pares: '));
        if (mtxA[i] % 2 === 0) {
            break;
        } else {
            console.log('Apenas valores pares.')
        }
    }
    while(true) {
        mtxB[i] = Number(prompt('Preencha a matriz B com números ímpares: '));
        if (mtxB[i] % 2 === 1) {
            break;
        } else {
            console.log('Apenas valores ímpares.')
        }
    }
}

mtxC.push(mtxA);
mtxC.push(mtxB);

console.log(mtxC);