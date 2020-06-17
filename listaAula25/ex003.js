const prompt = require('prompt-sync')({sigint: true});

var tabuleiro = [
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7]
];

while(true){
    console.log('Digite -1 na linha para parar o programa.');
    var posicaoC = Number(prompt('Insira a coluna: '));
    var posicaoL = Number(prompt('Insira a linha: '));

    if (posicaoL === -1) {
        break;
    }
    

}