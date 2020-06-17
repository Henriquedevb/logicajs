function somaRec(n){
    if(n == 1 || n == 0){
        return 1;
    }
    return n + somaRec (n-1);

} 

let prompt = require('prompt-sync')({sigint: true});
console.clear();

num = Number(prompt('Número: '));

console.log(somaRec(num));