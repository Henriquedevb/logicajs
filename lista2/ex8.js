let prompt = require('prompt-sync')();
console.clear();

var matrizA = [], matrizB = [], num = 0;

for(let k = 0; k < 12; k++){
    num = Number(prompt('Matriz A: '));
    matrizA.push(num);
    if(num % 2 == 0){
        matrizB.push(num);
    }
    else{
        num = num * 2;
        matrizB.push(num);
    }
}

console.log('Matriz B =' , matrizB);