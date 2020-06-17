/*
Escreva um programa para receber, em uma única linha, as 3 notas de um aluno
e calcular a média.
*/
let prompt = require('prompt-sync')({sigint: true});
console.clear();

var linha = prompt('Notas (separadas por um espaço): ');
var nota = linha.split(' ');
var media = 0

for (var k = 0; k < nota.length ; k++){
    nota[k] = Number(nota[k]);
    media += nota[k];
}

media = media/nota.length;

console.log(`A media eh ${media}.`);
