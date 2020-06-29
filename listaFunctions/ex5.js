var prompt = require('prompt-sync')({sigint: true});
console.clear();

function maior (x, y){
    if (x > y){
        return x
    }
    else{
        return y
    }
}

var numA = Number(prompt('Informe o primeiro número: '));
var numB = Number(prompt('Informe o segundo número: '));

console.log(maior(numA, numB));