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

tabuleiro = [];
N = 8;
for(lin=0; lin<N; lin++){
    tabuleiro[lin] = [];
    for(col=0; col<N; col++){
        tabuleiro[lin][col] = 0;
    }
}

console.clear();

lRei = Number(receber("Digite a linha do Rei: "));
cRei = Number(receber("Digite a coluna do Rei: "));

//marcando as posições de jogada do Rei
for(l=0; l<N; l++){
    for(c=0; c<N; c++){
        if(l>=lRei-1 && l<=lRei+1 && c>=cRei-1 && c<=cRei+1){
            tabuleiro[l][c] = 1
        }
    }
}

//marcando a posiçao do Rei
tabuleiro[lRei][cRei] = 2

imprime(tabuleiro);

saida = "";
for(l=0; l<N; l++){
    for(c=0; c<N; c++){
        if(tabuleiro[l][c] == 1){
            saida += `(${l},${c}) `;
        }
    }
}
console.log(saida);