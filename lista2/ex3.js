let prompt = require('prompt-sync')();
console.clear();

var matrizA = [];
var matrizB = [];
var matrizC = [];
var numA, numB, numC;

for(var k = 0; k < 5; k++){
    numA = Number(prompt('Informe o número A: '));
    matrizA.push(numA);
    numB = Number(prompt('Informe o número B: '));
    matrizB.push(numB);
    numC = numA - numB;
    matrizC.push(numC);
}

console.log(matrizC);