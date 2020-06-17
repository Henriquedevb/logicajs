let prompt = require('prompt-sync')();
console.clear();

var matrizA = [], matrizB = [], matrizC = [], matrizD = [];
var num = 0;

for(let k = 0; k < 5; k++){
    num = Number(prompt('Matriz A: '));
    matrizA.push(num);
}
for(let j = 0; j < 5; j++){
    num = Number(prompt('Matriz B: '));
    matrizB.push(num);
}
for(let l = 0; l < 5; l++){
    num = Number(prompt('Matriz C: '));
    matrizC.push(num);
}
matrizD.push(matrizA +','+ matrizB +','+ matrizC);
console.log(matrizD);