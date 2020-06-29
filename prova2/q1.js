const prompt = require('prompt-sync')({sigint: true});
let num = Number(prompt('Digite o n: '));

function fTeste(n) {
    if (n == 0) {
        return 0;
    }

    return 2 * fTeste(n-1) - 1;
}

console.log(fTeste(num));