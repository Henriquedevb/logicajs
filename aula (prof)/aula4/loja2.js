/*
algoritmo "loja2"
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

      escolha(tipo)
         caso 1
              escreva("Gênero Alimentício")
              
         caso 2
              escreva("Produto de Limpeza")
              
         caso 3
              escreva("Cosmético")
              
         caso 4
              escreva("Eletrodoméstico")
              
         outrocaso
              escreva("Tipo não cadastrado")
      fimescolha

fimalgoritmo
*/
const receber = require('prompt-sync')({sigint: true});
let tipo;

console.log("1 - Gênero Alimentício");
console.log("2 - Produto de Limpeza");
console.log("3 - Cosmético");
console.log("4 - Eletrodoméstico");
tipo = receber("Digite o tipo: ");

switch(tipo){
    case 1:
        escreva("Gênero Alimentício");
        break;    
    case 2:
        escreva("Produto de Limpeza");
        break;
    case 3:
        escreva("Cosmético");
        break;
    case 4:
        escreva("Eletrodoméstico");
        break;
    default:
        escreva("Tipo não cadastrado");
}

