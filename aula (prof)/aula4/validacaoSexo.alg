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
