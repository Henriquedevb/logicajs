const receber = require('prompt-sync')({sigint: true});
let num, trigo, g, kg;

num = Number(receber('Digite o número de quadrados a serem usados no tabuleiro de damas: '));
if(num < 1 || num > 64){
    console.log('Passou do limite');
}
else{
    trigo = 2 ** num
    g = trigo/12
    kg = g/1000
    console.log('O número de kg é: ' + kg);
}