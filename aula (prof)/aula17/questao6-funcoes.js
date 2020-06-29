/*
Questão 6
Faça uma função e um programa de teste para o cálculo do volume de uma 
esfera. Sendo que o raio é passado por parâmetro. 
V = 4/3 ∗ π ∗ R³
*/
const receber = require('prompt-sync')({sigint: true});

function volume(r){
    return ( (4/3) * Math.PI * Math.pow(r, 3) );
}

console.clear();

raio = Number(receber("Digite o raio da esfera: "));

vol = volume(raio);

console.log(`Volume = ${vol}`);