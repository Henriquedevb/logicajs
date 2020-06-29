const receber = require('prompt-sync')({sigint: true});
const fs = require('fs');

function imprime(M){
    saida = "";
    for(l=0; l<M.length; l++){
        for(c=0; c<M[l].length; c++){
            saida += `${M[l][c]} \t`;
        }
        saida += "\n";
    }
    console.log(saida);
}

function grava(arq, dado){
    fs.writeFileSync(arq, `${dado}\n`, {flag: "a"});
}

function processar(arq, msg){
    console.log(msg);
    grava(arq, msg);
    mar[lt][ct] = 0;
    receber();
}

N = 10;
mar = [];

//entrada (montagem do mar)
for(l=0; l<N; l++){
    mar[l] = [];
    for(c=0; c<N; c++){
        mar[l][c] = 0;
    }
}

//submarino
mar[2][3] = 2;
mar[2][4] = 2;

//contratorpedeiro
mar[3][8] = 3;
mar[4][8] = 3;
mar[5][8] = 3;

//fragata
mar[4][1] = 4;
mar[4][2] = 4;
mar[4][3] = 4;
mar[4][4] = 4;

//porta-aviões
mar[8][2] = 5;
mar[8][3] = 5;
mar[8][4] = 5;
mar[8][5] = 5;
mar[8][6] = 5;

imprime(mar);

lt = Number(receber('Linha do tiro: '));
ct = Number(receber('Coluna do tiro: '));

switch(mar[lt][ct]){
    case 2:
        processar('batalha-jogadas.txt', `(${lt},${ct}) - Acertou um submarino!`);
        break;
    case 3:
        processar('batalha-jogadas.txt', `(${lt},${ct}) - Acertou um contratorpedeiro!`);
        break;
    case 4:
        processar('batalha-jogadas.txt', `(${lt},${ct}) - Acertou um fragata!`);
        break;
    case 5:
        processar('batalha-jogadas.txt', `(${lt},${ct}) - Acertou um porta-aviões!`);
        break;
    default:
        processar('batalha-jogadas.txt', `(${lt},${ct}) - Água!`);
        break;
}

