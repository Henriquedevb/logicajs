const prompt = require('prompt-sync')({sigint: true});

let mtxTabuleiro = new Array();

for (let i = 0; i < 8; i++) {
    mtxTabuleiro[i] = new Array();
    for (let j = 0; j < 8; j++) {
        mtxTabuleiro[i][j] = '[ ]';
    }
}

function tabuleiro() {
    let linha = '';
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            linha += mtxTabuleiro[i][j];
        }
        console.log(linha);
        linha = '';
    }
}

let reiX = Number(prompt('Digite a linha da posição do Rei: '));
let reiY = Number(prompt('Digite a coluna da posição do Rei: '));

mtxTabuleiro[reiX][reiY] = '[R]';

tabuleiro();

let saida = '';

for (let fx = -1; fx <= 1; fx++) {
    for (let fy = -1; fy <= 1; fy++) {
        let posX = reiX + fx;
        let posY = reiY + fy;

        if (posX < 0 || posX > 7 || posY < 0 || posY > 7) {
            continue;
        }
        else {
            if (mtxTabuleiro[posX][posY] !== '[R]') {
                mtxTabuleiro[posX][posY] = '[-]';
                saida += `(${posX},${posY})`;
            }
        }
    }
}

tabuleiro();
console.log(saida);