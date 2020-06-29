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

N = 8;

tabuleiro = [];

for(l=0; l<N; l++){
	tabuleiro[l] = [];
	for(c=0; c<N; c++){
		tabuleiro[l][c] = 0;
	}
}
console.clear();
//imprime(tabuleiro);

lRainha = Number(receber('Linha da Rainha: '));
cRainha = Number(receber('Columa da Rainha: '));


//verticais e horizontais
for(l=0; l<N; l++){
	tabuleiro[l][cRainha] = 1;
}
for(c=0; c<N; c++){
	tabuleiro[lRainha][c] = 1;
}

//diagonais
c1 = cRainha;
c2 = cRainha;
for(l=lRainha; l>=0; l--){
	if(c1>=0){
		tabuleiro[l][c1--] = 1;
	}
	if(c2<N){
		tabuleiro[l][c2++] = 1;
	}
}

c1 = cRainha;
c2 = cRainha;
for(l=lRainha; l<N; l++){
	if(c1>=0){
		tabuleiro[l][c1--] = 1;
	}
	if(c2<N){
		tabuleiro[l][c2++] = 1;
	}
}


tabuleiro[lRainha][cRainha] = 2;

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








