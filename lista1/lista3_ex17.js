let receber = require('prompt-sync')({sigint: true});
console.clear();
let num = Number(receber('Digite um número para verificarmos se ele é um quadrado perfeito: '));
let raiz = Number(Math.sqrt(num));
if (Math.pow(raiz, 2) == num){
    console.log('Quadrado Perfeito.');
}
else{
    console.log('Não é quadrado perfeito.');
}