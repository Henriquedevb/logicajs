const prompt = (require('prompt-sync'))({sigint: true});
const fs = require('fs');
let arq1, mtx = [], arqSaida;

function ler(arq, M) {
    let file = fs.readFileSync(arq, 'utf-8');
    let linha = file.split('\n');
    
    for(k=0; k<linha.length; k++){
        linha[k] = linha[k].trim();
        M[k] = linha[k].split("|");
    }
}

function gravar(arq, M) {
    for(l=0; l<M.length; l++){
        for(c=0; c<M[l].length; c++){
            dado = M[l][c].toUpperCase();
            fs.writeFileSync(arq, dado, {flag: "a"});
        }
        fs.writeFileSync(arq, "\n", {flag: "a"});
    }
}

function busca(arq, M) {
    let maiorPop = 0;
    let pop = 0;
    for (let i = 0; i < M.length; i++) {
        pop = M[i][1];
        if (pop > maiorPop) {
            maiorPop = pop;            
        }
    }
    gravar()
}

arq1 = prompt('Digite o nome do arquivo a ser lido: ');
arqSaida = prompt('Digite o nome do arquivo a ser salvo');

ler(arq1, mtx);
console.log(busca(arq1, mtx));

