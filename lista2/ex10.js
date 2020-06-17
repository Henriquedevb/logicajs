let prompt = require('prompt-sync')();
console.clear();

var matriz = [], num = 0;

while(true){
    num = Number(prompt('Matriz: '));
    if(num % 4 == 0 && num > 0){
        matriz.push(num);
    }
    if(matriz.length === 50){
        break
    }
}