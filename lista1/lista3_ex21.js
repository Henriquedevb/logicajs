const receber = require('prompt-sync')({sigint: true})
let a, b, c;
a = Number(receber("Digite o lado A: "));
b = Number(receber("Digite o lado B: "));
c = Number(receber("Digite o lado C: "));
if ( (a < b + c) && (b < a + c) && (c < a + b) ){
    if ( (a == b) && (b == c) ){
        console.log('O seu triângulo é um triângulo equilátero!')
    }
    else if ((a != b) && (a != b) && (b != c)){
        console.log('O seu triângulo é um triângulo escaleno!')
    }
    else{
        console.log('O seu triângulo é um triângulo isósceles!')
    }
}
else{
    console.log('Triângulo inválido.')
}
