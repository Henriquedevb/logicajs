algoritmo "algoritmo9"
//EXERCÍCIO 04
//Escrever um algoritmo para receber os termos 'a', 'b' e 'c' de uma
//equação do segundo grau da forma ax² + bx + c = 0
//Crie uma variável chamada 'delta' (delta = b*b - 4*a*c)
//Seu algoritmo deve informar se a equação possui raízes reais (delta >=0)
//ou raízes imaginárias (delta < 0)
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
      //saída de resultados
      se (delta >= 0) entao
         escreva("Raízes reais")
      senao
         escreva("Raízes imaginárias")
      fimse


fimalgoritmo
