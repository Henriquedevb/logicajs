let receber = require('prompt-sync')({sigint: true});
console.clear();
let p = Number(receber('Informe seu peso (em kg): '));
let a = Number(receber('Informe sua altura (em metros): '));
let imc = p/(a*a);
if (imc < 20){
    console.log('IMC = ' + imc)
    console.log('Código 1 - Paciente abaixo do peso.')
}
else if (imc >= 20 && imc <= 25){
    console.log('IMC = ' + imc)
    console.log('Código 2 - Paciente com peso normal.')
}
else if (imc > 25 && imc < 30){
    console.log('IMC = ' + imc)
    console.log('Código 3 - Paciente com excesso de peso.')
}
else if (imc >= 30 && imc < 35){
    console.log('IMC = ' + imc)
    console.log('Código 4 - Paciente com obesidade.')
}
else{
   console.log('IMC = ' + imc)
   console.log('Código 5 - Paciente com obesidade mórbida.')
}