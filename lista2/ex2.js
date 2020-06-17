let prompt = require('prompt-sync')();
console.clear();

var matrizA = [];
var matrizB = [];
var num, num2;

for(var k = 0; k < 10; k++){
    num = prompt('Informe o número: ');
    matrizA.push(num);
    num2 = num**2;
    matrizB.push(num);
}

console.log(matrizA , matrizB);