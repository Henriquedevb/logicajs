const receber = require('prompt-sync')({sigint: true});
const fs = require('fs');

function ler (arq){
    let file = fs.readFileSync(arq, 'utf-8');
    let linha = file.split('\n')
}

function salvar (arq1, num){
    for (let k = 0; k < num; k++){
        fs.writeFileSync(arq, "\n", {flag: "a"});
    }
}