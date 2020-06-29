const prompt = require('prompt-sync')({sigint: true});

function funcRec(n) {
    if (n == 1) {
        return 2;
    }

    return (1 + (n ** 2)) / n + funcRec(n - 1);
}

let num = Number(prompt('Digite o n: '));

console.log(funcRec(num));