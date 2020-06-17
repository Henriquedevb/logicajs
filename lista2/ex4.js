let prompt = require('prompt-sync')();
console.clear();

var matrizA = [], matrizB = [], matrizC = [];
var num = 0;

for(let k = 0; k < 15; k++){
    num = Number(prompt('Matriz A: '));
    matrizA.push(num);
}
for(let j = 0; j < 15; j++){
    num = Number(prompt('Matriz B: '));
    matrizB.push(num);
}
matrizC.push(matrizA +','+ matrizB);
console.log(matrizC);