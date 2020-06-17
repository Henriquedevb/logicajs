function desc(n){
    if(n == 0){
        return 0
    }

    return n + ' ' + desc(n-1);

}

let prompt = require('prompt-sync')({sigint: true});
console.clear();

num = Number(prompt('Digite o número: '));

console.log(desc(num))