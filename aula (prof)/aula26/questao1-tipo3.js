/*
Questão 1
Asdrúbal e Demerval são criadores de cabras e moram em municípios bem distante um do outro. Os
dois criadores receberam lotes iguais de cabras para engorda. As cabras de Demerval são mais
magras e pesam, em média, três quintos (3/5) do peso médio de cada cabra de Asdrúbal, por outro
lado, Demerval consegue uma taxa de engorda das cabras em torno de 8% ao mês, já Asdrúbal
consegue uma taxa de engorda de 6% ao mês. Crie um programa que receba o peso médio de uma
cabra de Asdrúbal e depois calcule e imprima a quantidade de meses necessários para que o peso
das cabras de Demerval iguale ou ultrapasse o peso das cabras de Asdrúbal.
*/
const receber = require('prompt-sync')({sigint: true});
console.clear();

a = Number(receber('Digite o peso médio de uma cabra de Asdrúbal: '));
d = a * 3/5;
meses = 0;

while(d < a){
    d = d * 1.08;
    a = a * 1.06;
    meses++;
}

console.log(meses);
