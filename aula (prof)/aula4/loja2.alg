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
