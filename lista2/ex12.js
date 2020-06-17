let prompt = require('prompt-sync')({sigint: true});
console.clear();

var mtxA = [],
    mtxB = [], 
    mtxC = [], 
    num = 0;

while(true){
    num = Number(prompt('Matriz A: '));
    if(num % 6 == 0 && num != 0){
        mtxA.push(num);
    }
    else{
        console.log('Apenas números múltiplos de 2 e 3.');
    }
    if(mtxA.length == 10){
        break;
    }
}

while(true){
    num = Number(prompt('Matriz B: '));
    if(num % 5 == 0 && num != 0){
        mtxB.push(num);
    }
    else{
        console.log('Apenas números múltiplos de 5.');
    }
    if(mtxB.length == 10){
        break
    }
}

mtxC.push(mtxA + ',' + mtxB);
console.log(mtxC);