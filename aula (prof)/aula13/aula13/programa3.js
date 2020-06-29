const receber = require('prompt-sync')({sigint: true});
console.clear();
//notas = new Array(3);
notas = [];
notas[0] = 7;
notas[1] = 10;
notas[2] = 6;


tam = notas.length;
console.log(`Tamanho = ${tam}`);
console.log(notas);