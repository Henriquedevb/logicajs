/*
 Escreva um algoritmo para ler três valores numéricos
 que representem os termos de uma equação do 
 segundo  grau  (termos  A,  B  e  C).  
 Seu  algoritmo  deve  verificar  se  o  delta  ́e
 menor que zero, neste caso o algoritmo deve escrever 
 “raízes imaginárias” e o cálculo não poderá ser feito,
 caso seja maior ou igual a zero, o algoritmo deverá 
 calcular as raízes pela fórmula de Baskara e 
 escrevê-las como saída do processamento
*/ 
const receber = require('prompt-sync')({sigint: true});
let A, B, C, delta, x1, x2;
A = receber("Digite o termo A: ");
B = receber("Digite o termo B: ");
C = receber("Digite o termo C: ");

//delta = Math.pow(B, 2) - 4*A*C;
delta = B*B - 4*A*C;
console.log("delta = " + delta);
if(delta < 0){
    console.log("raízes imaginárias");
}
else{
   x1 = (-B + Math.sqrt(delta)) / (2*A); 
   x2 = (-B - Math.sqrt(delta)) / (2*A);

   console.log("X1 = " + x1);
   console.log("X2 = " + x2);
}



