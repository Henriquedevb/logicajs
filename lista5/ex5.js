function fibonacci(num){
    if(num == 1){
        return 0
    }

    if(num == 2){
        return 1
    }

    return fibonacci(num - 1) + fibonacci(num - 2);

}

let prompt = require('prompt-sync')({sigint: true});
console.clear();

num = Number(prompt('Digite o n: '));

console.log(`O n-ésimo termo é: ${fibonacci(num)}`);