algoritmo "validacaoSexo"
var
   sexo : caractere
inicio
      escreva("Digite o sexo: ")
      leia(sexo)
      
      se (sexo = "masculino") ou (sexo = "feminino") entao
         escreva("Sexo v�lido")
      senao
         escreva("Sexo inv�lido")
      fimse
      
fimalgoritmo
