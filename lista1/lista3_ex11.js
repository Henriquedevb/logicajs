/*. Escreva um algoritmo para ler quatro valores inteiros e apresentar os valores que s˜ao divis´ıveis por 2 e por 3.*/
const receber = require('prompt-sync')({sigint: true});
let a, b, c, d;
console.clear()
a = Number(receber('Digite o valor de a: '));
b = Number(receber('Digite o valor de b: '));
c = Number(receber('Digite o valor de c: '));
d = Number(receber('Digite o valor de d: '));
if(a%2==0 && a%3==0){
    console.log('a é divisível por 2 e por 3.');}
if(b%2==0 && b%3==0){
    console.log('b é divisível por 2 e por 3.');}
if(c%2==0 && c%3==0){
    console.log('c é divisível por 2 e por 3.')}
if(d%2==0 && d%3==0){
    console.log('d é divisível por 2 e por 3.')}