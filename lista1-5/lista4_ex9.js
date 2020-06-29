const receber = require('prompt-sync')({sigint: true})
let p, a, imc;
p = Number(receber("Digite o peso da pessoa: "));
a = Number(receber("Digite a altura da pessoa: "));
imc = Number(p/(a*a));
console.log('Seu IMC é ' + imc);

if (imc < 18.5){
    console.log("Abaixo do peso.");
}
else if ((imc >= 18.5) && (imc < 25) ){
    console.log("Peso normal.");
}
else if ((imc >= 25) && (imc < 30)){
    console.log("Acima do peso.");
}
else{
    console.log("Obeso.");
}
