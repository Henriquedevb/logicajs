const prompt = (require('prompt-sync'))({sigint: true});
let mtxA = [], mtxB = [], mtxC = [];

for (let i = 0; i < 10; i++) {
    while(true) {
        mtxA[i] = Number(prompt('Preencha a matriz A com números divisíveis por 6: '));
        if (mtxA[i] % 6 === 0) {
            break;
        } else {
            console.log('Apenas valores divisíveis por 6.')
        }
    }
    while(true) {
        mtxB[i] = Number(prompt('Preencha a matriz B com números divisíveis por 5: '));
        if (mtxB[i] % 5 === 0) {
            break;
        } else {
            console.log('Apenas valores divisíveis por 5.')
        }
    }
}

mtxC.push(mtxA);
mtxC.push(mtxB);

console.log(mtxC);