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
