const receber = require('prompt-sync')({sigint: true});
let A, B, resto;

A = Number(receber("Digite A: "));
B = Number(receber("Digite B: "));

while(B != 0){
    resto = A%B;
    A = B;
    B = resto;
}
console.log("MDC = " + A);