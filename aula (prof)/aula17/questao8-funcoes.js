/*
Questão 8
Escreva um programa que receba três valores que representam a altura, a 
base maior e a base menor de um trapézio retângulo.
Seu programa deve conter
• uma função para calcular a área do trapézio
• uma função para calcular o perímetro do trapézio.

Area: (B+b)*h) / 2
Perímetro: B + b + h + x

( B→ Base maior; b→ Base menor; h→ Altura; x = √ h² +(B−b)² )
*/
const receber = require('prompt-sync')({sigint: true});

function area(B, b, h){
    return ( (B+b) * h )/2;
}

function perimetro(B, b, h){
    x = Math.sqrt( h*h + Math.pow((B-b), 2) );
    return (B + b + h + x);
}

console.clear();

B = Number(receber("Base maior: "));
b = Number(receber("Base menor: "));
h = Number(receber("Altura: "));

a = area(B, b, h);
p = perimetro(B, b, h);

console.log(`Área = ${a}`);
console.log(`Perímtro = ${p}`);