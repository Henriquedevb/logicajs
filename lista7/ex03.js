const prompt = (require('prompt-sync'))({sigint: true});
var x = 0, z = 0;

function exp(x, z) {
    return x ** z;
}

x = Number(prompt('Informe o x: '));
z = Number(prompt('Informe o z: '));

console.log(exp(x, z));
