var prompt = require('prompt-sync')({sigint: true});
console.clear();

function volume(x){
    v = 4/3 * Math.PI * (x**3);
    return v;
}

var raio = Number(prompt('Raio da esfera: '));

console.log(`O volume é: ${volume(raio)} cm³.`);