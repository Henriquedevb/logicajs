var prompt = require('prompt-sync')({sigint: true});
console.clear();

function temperatura(c){
    f = c * (9/5) + 32;
    return f
}

tempC = Number(prompt('Informe a temperatura em graus Celsius: '));

console.log(`A temperatura em graus Fahrenheit é ${temperatura(tempC)}.`);