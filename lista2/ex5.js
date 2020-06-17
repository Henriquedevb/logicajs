let prompt = require('prompt-sync')();
console.clear();

var matriz = [];
var posicao = 0;

for(var k = 0; k < 30; k++){
    posicao = Number(prompt('Preencha o vetor: '));
    matriz.push(posicao);
}

var num = Number(prompt('Número a ser pesquisado: '));

if(matriz.indexOf(num) != -1){
    console.log('True');
}
else{
    console.log('False');
}