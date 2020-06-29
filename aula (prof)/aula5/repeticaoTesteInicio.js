/*
//escreva um algoritmo para imprimir na tela os números de 1 a 5
algoritmo "semnome"
var
   num: inteiro
inicio
      num <-0
      enquanto (num < 5) faca
             num <- num + 1
             escreval(num)
      fimenquanto
fimalgoritmo
*/
const receber = require('prompt-sync')({sigint: true});
let num;
num = 3;
while (num < 5) {
    //num = num + 1;
    //num++;    //operador de PÓS-incremento
    ++num;      //operador de PRÉ-incremento
    console.log(num);
}
