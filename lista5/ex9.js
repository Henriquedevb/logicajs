function par(n, x){
    if (x % 2 == 1){
        return 'Apenas números pares.'
    }


    if(n == x){
        return x
    }

    return n + ' ' + par(n + 2, x);

}

let prompt = require('prompt-sync')({sigint: true});
console.clear();

num = Number(prompt('Digite o número: '));

console.log(par(0, num))