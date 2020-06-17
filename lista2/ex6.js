let prompt = require('prompt-sync')();
console.clear();

var matrizA = [], matrizB = [];

//cria a matriz A
for(let k = 0; k < 5; k++){
    num = Number(prompt('Matriz A: '));
    matrizA.push(num);
    //cria a matrizB
    var fatorial = 1;
    for(var x = 1; x < num; x++){
        fatorial = fatorial * x;
    }
    matrizB.push(num * fatorial);
}

console.log('Matriz B = ', matrizB)