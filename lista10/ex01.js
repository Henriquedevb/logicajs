const prompt = (require('prompt-sync'))({sigint: true});
const fs = require('fs');
let arq1, arq2, arq3, mtx = [];

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

arq1 = prompt('Primeiro arquivo para ler: ');
arq2 = prompt('Segundo arquivo para ler: ');
arq3 = prompt('Nome do arquivo para gravar: ');
mtx = [];

ler(arq1, mtx);
ler(arq2, mtx);
gravar(arq3, mtx);
console.log('Salvo com sucesso!');

