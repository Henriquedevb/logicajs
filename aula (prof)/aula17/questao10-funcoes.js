/*
Questão 10
Faça uma função que receba uma temperatura em graus Celsius e retorne-a 
convertida em graus Fahrenheit. A fórmula de conversão é: 
F = C * (9.0/5.0) + 32.0, sendo F a temperatura em Fahrenheit e 
C a temperatura em Celsius
*/
const receber = require('prompt-sync')({sigint: true});

function toFahrenheit(c){
    return c * (9/5) + 32;
}

console.clear();

celsius = Number(receber("Celsius: "));
fahrenheit = toFahrenheit(celsius);

console.log(`Temperatura em Fahrenheit: ${fahrenheit}`);