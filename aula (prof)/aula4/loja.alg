algoritmo "loja"
var
   tipo : inteiro
inicio
      //entrada de dados
      escreval("1 - G�nero Aliment�cio")
      escreval("2 - Produto de Limpeza")
      escreval("3 - Cosm�tico")
      escreval("4 - Eletrodom�stico")
      escreva("Digite o tipo: ")
      leia(tipo)

      se (tipo = 1) entao
         escreva("G�nero Aliment�cio")
      senao
           se (tipo = 2) entao
              escreva("Produto de Limpeza")
           senao
                se (tipo = 3) entao
                   escreva("Cosm�tico")
                senao
                     se (tipo = 4) entao
                        escreva("Eletrodom�stico")
                     senao
                        escreva("Tipo n�o cadastrado")
                     fimse
                fimse
           fimse
      fimse
fimalgoritmo
