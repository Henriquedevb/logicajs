/*
Faça um programa que some os múltiplos de 3 ou de 4 contidos em um intervalo definido pelo usuário. O usuário define o valor inicial do intervalo e o valor final deste interval e o programa deve somar todos os múltiplos de 3 ou de 4 contidos neste intervalo. Caso o usuário digite um intervalo inválido (começando por um valor maior que o valor final) deve ser escrito uma mensagem de erro na tela, “Intervalo de valores inválido” e o programa termina. 
Exemplo de entrada:	
Exemplo de saída
10  33        276
3   11         30
*/
const receber = require('prompt-sync')({sigint: true});
console.clear();
a = Number(receber('Digite a: '));
b = Number(receber('Digite b: '));

soma = 0;

if(a <= b){
    for(k=a; k<=b; k++){
        if(k%3==0 || k%4==0){
             soma = soma + k;
        }
    }
    console.log(`soma = ${soma}`);
}
else {
    console.log("Intervalo de valores inválido");
}
