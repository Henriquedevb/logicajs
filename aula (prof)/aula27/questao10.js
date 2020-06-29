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

function ler(arq, M){
	arquivo = fs.readFileSync(arq, 'utf-8'); 
	linha = arquivo.split('\n');
	
	for(l=0; l<linha.length; l++){
		M[l] = linha[l].trim().split("|");
		for(c=1; c<M[l].length; c++){
			M[l][c] = Number(M[l][c]);
		}
	}
}

function maximo(M, col){
	lMax = 0;
	for(l=0; l<M.length; l++){
		if(M[l][col] > M[lMax][col]){
			lMax = l;
		}
	}
	
	saida = "";
	for(c=0; c<M[lMax].length; c++){
		saida += `${M[lMax][c]} \t`;
	}
	console.log(saida);
}

function media(M){
	saida = "";
	for(l=0; l<M.length; l++){
		media = ( M[l][1] + M[l][2] + M[l][3] ) / 3;
		saida += `${M[l][0]} \t ${media}\n`;
	}
	console.log(saida);
}

dados = [];
ler('produtos.txt', dados);

do{
	console.clear();
	menu  = "";
	menu += "1 - Maior valor de preço 3\n";
	menu += "2 - Média de preços\n";
	menu += "3 - Sair";
	console.log(menu);
	op = Number(receber("Digite uma opção: "));
	
	switch(op){
		case 1:
			console.clear();
			maximo(dados, 3);
			receber();
			break;
		case 2:
			console.clear();
			media(dados)
			receber();
			break;
		case 3:
			console.log("Obrigado por sua visita!");
			break;
		default:
			console.log("Opção inválida!");
			receber();
			break
	}
	
}while(op != 3);





