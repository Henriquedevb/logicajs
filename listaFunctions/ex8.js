var prompt = require('prompt-sync')({sigint: true});
console.clear();

function area(x, y, z){
    a = (x + y)*z/2;
    return a;
}

function perimetro(x, y, z){
    a = x + y + z + (Math.sqrt((z**2)+((x-y)**2))); //formula passada :[
    return a;
}

var Base = Number(prompt('Informe a base maior: '));
var base = Number(prompt('Informe a base menor: '));
var altura = Number(prompt('Informe a altura: '));

console.log(`A área do trapézio é ${area(Base, base, altura)} e o perímetro do trapézio é ${perimetro(Base, base, altura)}.`)