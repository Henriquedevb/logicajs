function asc(n, x){

    if(n == x){
        return x
    }

    return n + ' ' + asc(n + 1, x);

}

let prompt = require('prompt-sync')({sigint: true});
console.clear();

num = Number(prompt('Digite o número: '));

console.log(asc(0, num))