/*
algoritmo "loja"
var
   tipo : inteiro
inicio
      //entrada de dados
      escreval("1 - Gênero Alimentício")
      escreval("2 - Produto de Limpeza")
      escreval("3 - Cosmético")
      escreval("4 - Eletrodoméstico")
      escreva("Digite o tipo: ")
      leia(tipo)

      se (tipo = 1) entao
         escreva("Gênero Alimentício")
      senao
           se (tipo = 2) entao
              escreva("Produto de Limpeza")
           senao
                se (tipo = 3) entao
                   escreva("Cosmético")
                senao
                     se (tipo = 4) entao
                        escreva("Eletrodoméstico")
                     senao
                        escreva("Tipo não cadastrado")
                     fimse
                fimse
           fimse
      fimse
fimalgoritmo
*/
const receber = require('prompt-sync')({sigint: true});
let tipo;

console.log("1 - Gênero Alimentício");
console.log("2 - Produto de Limpeza");
console.log("3 - Cosmético");
console.log("4 - Eletrodoméstico");
tipo = receber("Digite o tipo: ");

if(tipo == 1){
    console.log("Gênero Alimentício");
}
else if(tipo == 2){
    console.log("Produto de Limpeza");
}
else if(tipo == 3){
    console.log("Cosmético");
}
else if(tipo == 4){
    console.log("Eletrodoméstico");
}
else{
    console.log("Tipo não cadastrado");
}