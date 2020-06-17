const receber = require('prompt-sync')({sigint: true});
let A, B, C;

A = Number(receber("Digite o lado A: "));
B = Number(receber("Digite o lado B: "));
C = Number(receber("Digite o lado C: "));

if( (A<(B+C)) && (B<(A+C)) && (C<(A+B)) ){
    if( (A==B) && (B==C)){
        console.log("Triângulo Equilátero");
    }
    else if( (A!=B) && (A!=C) && (B!=C) ){
        console.log("Triângulo Escaleno");
    }
    else{
        console.log("Triângulo Isósceles");
    }
}
else{
    console.log("Triângulo Inválido!");
}

/*
Adapte o programa para calcular a área pela fórmula doTeorema de Heron.
Use o link https://mundoeducacao.bol.uol.com.br/matematica/formula-heron.htm
*/