/*
algoritmo "algoritmo7"
var
num1: inteiro
inicio
      escreva("Digite um número: ")
      leia(num1)
      se (num1 >= 1) e (num1 <= 100) entao
         escreva("O dobro desse valor é",num1 * 2)
      senao
           escreva("Número fora do intervalo desejado.")
      fimse
fimalgoritmo
*/

const receber = require('prompt-sync')({sigint: true})
let n;
n = receber ('Digite um número: ')

if(n >= 1 && n <=100){
    console.log("O dobro desse valor é " + n * 2 + ".")
}
else{
    console.log("Número fora do intervalo desejado.")
}