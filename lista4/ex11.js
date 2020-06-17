var prompt = require('prompt-sync')({sigint: true});
console.clear();

function fatorial(x){
    var fat = 1;

    for(var k = 1; k < (x+1); k++){
        fat = fat * k;
    }
    
    return fat
}

num = Number(prompt('Informe o número: '));

console.log(`O fatorial do número é: ${fatorial(num)}`);