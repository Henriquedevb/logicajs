const receber = require('prompt-sync')({sigint: true});

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

N = 10;
mar = [];
//montagem do "mar"
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

lt = Number(receber("Digite a linha do tiro: "));
ct = Number(receber("Digite a coluna do tiro: "));

switch(mar[lt][ct]){
    case 2:
        break;
    case 3:
        break;
    case 4:
        break;
    case 5:
        break;
    default:
        
}
