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

while (true) {
    var bispoX = Number(prompt('Digite a linha da posição do bispo: '));
    
    if (bispoX > 0 && bispoX < 8) {
                
        let bispoY = Number(prompt('Digite a coluna da posição do bispo: '));
        let saida = '';

        mtxTabuleiro[bispoX][bispoY] = '[B]';


        // diagonal principal pra cima
        for (let i = 0; i <= 7; i++) {
            let posX = bispoX - i;
            let posY = bispoY - i;

            if (posX < 0 || posX > 7 || posY < 0 || posY > 7) {
                continue;
            }
            else {
                if (mtxTabuleiro[posX][posY] !== '[B]') {
                    mtxTabuleiro[posX][posY] = '[-]';
                    saida += `(${posX},${posY})`;
                }
            }
        }

        // diagonal secundaria pra cima
        for (let i = 0; i <= 7; i++) {
            let posX = bispoX - i;
            let posY = bispoY + i;

            if (posX < 0 || posX > 7 || posY < 0 || posY > 7) {
                continue;
            }
            else {
                if (mtxTabuleiro[posX][posY] !== '[B]') {
                    mtxTabuleiro[posX][posY] = '[-]';
                    saida += `(${posX},${posY})`;
                }
            }
        }

        // diagonal secundaria pra baixo
        for (let i = 0; i <= 7; i++) {
            let posX = bispoX + i;
            let posY = bispoY - i;

            if (posX < 0 || posX > 7 || posY < 0 || posY > 7) {
                continue;
            }
            else {
                if (mtxTabuleiro[posX][posY] !== '[B]') {
                    mtxTabuleiro[posX][posY] = '[-]';
                    saida += `(${posX},${posY})`;
                }
            }
        }
        // diagonal principal pra baixo
        for (let i = 0; i <= 7; i++) {
            let posX = bispoX + i;
            let posY = bispoY + i;

            if (posX < 0 || posX > 7 || posY < 0 || posY > 7) {
                continue;
            }
            else {
                if (mtxTabuleiro[posX][posY] !== '[B]') {
                    mtxTabuleiro[posX][posY] = '[-]';
                    saida += `(${posX},${posY})`;
                }
            }
        }

        tabuleiro();
        console.log(saida);

    }
    console.log('Posição inválida.');
    break;
}
