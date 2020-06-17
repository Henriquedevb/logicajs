let prompt = require('prompt-sync')();
console.clear();

var mtxA = [], mtxB = [], mtxC = [], num = 0;

while(true){
    num = Number(prompt('Matriz A: '));
    if(num % 2 == 0){
        mtxA.push(num);
    }
    else{
        console.log('Apenas números pares.');
    }
    if(mtxA.length == 6){
        break;
    }
}

while(true){
    num = Number(prompt('Matriz B: '));
    if(num % 2 == 1){
        mtxB.push(num);
    }
    else{
        console.log('Apenas números ímpares.');
    }
    if(mtxB.length == 6){
        break
    }
}

mtxC.push(mtxA + ',' + mtxB);
console.log(mtxC);