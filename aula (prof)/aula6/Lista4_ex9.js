const receber = require('prompt-sync')({sigint: true});
let imc, peso, altura;

//entrada de dados
peso = Number(receber("Digite o peso: "));
altura = Number(receber("Digite a altura em m: "));

//processamento
imc = peso / Math.pow(altura, 2);
console.log("IMC = " + imc);
if(imc < 18.5){
    console.log("Abaixo do peso");
}
else if( (imc>=18.5) && (imc<=25) ){
    console.log("Pesso normal");
}
else if( (imc>=25) && (imc<=30) ){
    console.log("Acima do peso");
}
else {
    console.log("Obeso");
}