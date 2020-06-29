const prompt = require('prompt-sync')({sigint: true});

function fatorial(x) {
    if (x === 1) {
        return 1;
    }
    return x * fatorial(x - 1);
}



let num = Number(prompt('Informe o número: '));
let num1 = 2 * num;
let res = fatorial(num1)/fatorial(num);

console.log(`O resultado é: ${res}.`);