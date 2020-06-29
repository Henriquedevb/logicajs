const prompt = require('prompt-sync')({sigint: true});

function soma(x, y){
    return x + y;
}

linha = prompt('Digite os dois valores separados por espaço: ');
n = linha.split(' ');

for(let k = 0; k < n.length; k++){
    n[k] = Number(n[k]);
}

console.log(soma(n[0], n[1]));