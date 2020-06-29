/*
algoritmo "validacaoSexo"
var
   sexo : caractere
inicio
      escreva("Digite o sexo: ")
      leia(sexo)
      
      se (sexo = "masculino") ou (sexo = "feminino") entao
         escreva("Sexo válido")
      senao
         escreva("Sexo inválido")
      fimse
      
fimalgoritmo
*/
const receber = require('prompt-sync')({sigint: true});
let sexo;

sexo = receber("Digite o sexo: ");

if (sexo == "masculino" || sexo == "feminino") {
    escreva("Sexo válido");
}
else{
    escreva("Sexo inválido");
}