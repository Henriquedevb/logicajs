let prompt = require('prompt-sync')();
console.clear();

var matrizA = [], matrizB = [], matrizC = [], matrizD = [], num = 0, num1 = 0;

for(let k = 0; k < 6; k++){
    num = Number(prompt('Matriz A: '));
    matrizA.push(num);
    if(num % 2 == 0){
        matrizD.push(num);
    }
    else{
        matrizC.push(num);
    }
    num = Number(prompt('Matriz B: '));
    matrizB.push(num);
    if(num % 2 == 0){
        matrizD.push(num);
    }
    else{
        matrizC.push(num);
    }
}

console.log(matrizC);
console.log(matrizD);