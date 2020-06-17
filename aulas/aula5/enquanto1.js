/*
//escreva um algoritmo para imprimir na tela os números de 1 a 5
algoritmo "enquanto"

var
   num : inteiro
inicio
      num <- 0
      enquanto  (num < 5) faca
                num <- num + 1
                escreval(num)
      fimenquanto
fimalgoritmo
*/

const receber = require('prompt-sync')({sigint: true})
let num;
num = 0;
while (num < 100) {
    num = num + 1
    console.log(num)
}

