const fs = require('fs');
let dados = [];

function lerArq(arq, M) {
    let file = fs.readFileSync(arq, 'utf-8');
    let linha = file.split('\n');
    
    for(k=0; k<linha.length; k++){
        linha[k] = linha[k].trim();
        M[k] = linha[k].split("|");
    }
}

lerArq('dados.txt', dados);


// parte 1 da questão

var menorIdade = 200;

for (let i = 0; i < dados.length; i++) {
    let idadeAtual = Number(dados[i][1]);
    
    if (menorIdade > idadeAtual) {
        menorIdade = idadeAtual;
        posMenorIdade = i;
    }
}

console.log(`Aluno mais novo: ${dados[posMenorIdade][0]}`);

// parte 2 da questão

var nota = [[],[],[],[],[]];

for (let i = 0; i < dados.length; i++) {
    let notaAluno = (Number(dados[i][3]) + Number(dados[i][4]) + Number(dados[i][2])) / 3;

    if (Number(dados[i][5]) >= 90) {
        notaAluno += 0.5;
    } 


    nota[i][0] = dados[i][0]; // nome do aluno
    nota[i][1] = notaAluno; // média da nota

}
console.log('Médias: ');
console.log(nota);
