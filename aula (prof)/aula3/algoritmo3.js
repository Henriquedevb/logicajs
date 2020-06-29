/*
algoritmo "algoritmo3"
// Função : linearizar expressões
// Autor : Prof. Cícero Almeida
// Data : 28/02/2020
// Seção de Declarações 
var
   x, y : inteiro
   ex1, ex2 : real
inicio
      x <- 10
      y <- 5

      ex1 <- 2 * x/4
      ex2 <- raizq(2*x)/y

      escreval(ex1)
      escreval(ex2)
fimalgoritmo
*/
let x, y, ex1, ex2;

x = 10;
y = 5;

ex1 = 2 * x/4;
ex2 = Math.sqrt(2*x)/y;

console.log("ex1 = " + ex1);
console.log("ex2 = " + ex2);