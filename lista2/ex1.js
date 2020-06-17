let prompt = require('prompt-sync')();
console.clear();

let matriz = [];

for(let k = 0; k < 10; k++){
    num = prompt('Informe o número: ');
    matriz.push(num);
}
console.log(matriz);