algoritmo "algoritmo9"
//EXERC�CIO 04
//Escrever um algoritmo para receber os termos 'a', 'b' e 'c' de uma
//equa��o do segundo grau da forma ax� + bx + c = 0
//Crie uma vari�vel chamada 'delta' (delta = b*b - 4*a*c)
//Seu algoritmo deve informar se a equa��o possui ra�zes reais (delta >=0)
//ou ra�zes imagin�rias (delta < 0)
var
   a, b, c, delta : real
inicio
      //entrada de dados
      escreva("Digite o termo A: ")
      leia(a)
      escreva("Digite o termo B: ")
      leia(b)
      escreva("Digite o termo C: ")
      leia(c)
      //processamento
      delta <- b*b - 4*a*c
      //sa�da de resultados
      se (delta >= 0) entao
         escreva("Ra�zes reais")
      senao
         escreva("Ra�zes imagin�rias")
      fimse


fimalgoritmo
