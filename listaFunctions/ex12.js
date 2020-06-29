var prompt = require('prompt-sync')({sigint: true});
console.clear();

function fibo(i){
    var x = 0,
        y = 1;
    for(var k = 0 ; k < i ; k++){
        x = x + y;
        y++;
    }

    return x
}

num = Number(prompt('Informe a posição que deseja buscar: '));

console.log(`O número desejado é: ${fibo(num)}`);