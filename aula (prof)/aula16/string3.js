/*
Escreva um programa para receber, em uma única linha, as 3 notas de um aluno
e calcular a média.
*/
const receber = require('prompt-sync')({sigint: true});

console.clear();
strNotas = receber("Digite as notas separadas por espaço: ");
nota = strNotas.split(" ");
media = 0;

for(k=0; k<nota.length; k++){
    nota[k] = Number(nota[k]);
    media += nota[k];
}

media = media / nota.length;

console.log(`media = ${media}`);