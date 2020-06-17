var prompt = require('prompt-sync')({sigint: true});
console.clear();

function real (x){
    if (x > 0){
        return 1
    }
    else if (x == 0){
        return 0
    }
    else{
        return -1
    }
}

var num = Number(prompt('Digite o número: '));

console.log(real(num))