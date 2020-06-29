const prompt = require('prompt-sync')({sigint: true});
console.clear();

let fibo = [], termo1 = 1, termo2 = 1, N;
N = Number(prompt('Informe o N: '));

for (let k = 0; k < (N - 2); k++){
    fibo = termo1 + termo2;
    termo1 = termo2;
    termo2 = fibo;
}

console.log(fibo);