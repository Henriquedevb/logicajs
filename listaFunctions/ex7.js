var prompt = require('prompt-sync')({sigint: true});
console.clear();

function area(x){
    y = 3.14 * Math.pow(x, 2);
    return y
}

function perimetro(x){
    y = 2 * 3.14 * x
    return y
}

var raio = Number(prompt('Informe o raio: '));

console.log(`A área do círculo é ${area(raio)} e o perímetro da circunferência é ${perimetro(raio)}. `);
