/*
algoritmo "validaNota"
var
   nota : real
inicio
      escreva("Digite uma nota: ")
      leia(nota)
      
      se nao(nota < 0) entao
         escreva("Nota = ", nota)
      senao
         escreva("Nota inválida!")
      fimse
fimalgoritmo
*/
const receber = require('prompt-sync')({sigint: true});
let nota;

nota = receber("Digite uma nota: ");

if (!(nota < 0)) {
    console.log("Nota = ", nota);
}
else{
    console.log("Nota inválida!");
}
