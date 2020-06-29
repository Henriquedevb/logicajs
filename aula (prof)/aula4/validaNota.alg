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
