algoritmo "loja2"
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

      escolha(tipo)
         caso 1
              escreva("G�nero Aliment�cio")
              
         caso 2
              escreva("Produto de Limpeza")
              
         caso 3
              escreva("Cosm�tico")
              
         caso 4
              escreva("Eletrodom�stico")
              
         outrocaso
              escreva("Tipo n�o cadastrado")
      fimescolha

fimalgoritmo
