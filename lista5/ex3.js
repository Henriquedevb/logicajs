function somaCubos(n){
    if (n == 1){
        return 1
    }
    return Math.pow(num, 3) + somaCubos(n - 1);

} 

let prompt = require('prompt-sync')({sigint: true});
console.clear();

num = Number(prompt('Número: '));

console.log(somaCubos(num));