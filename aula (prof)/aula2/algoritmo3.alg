//Escrever um algoritmo para receber os lados de um ret�ngulo e imprimir:
// - A �rea
// - O per�metro
algoritmo "algoritmo3"
var
   lado1, lado2: real
   perimetro, area: real
   //criar duas vari�veis do tipo real para representar os lados
   //criar mais duas vari�veis para armazenar o per�metro e a �rea (tipo real)
inicio
      //entrada de dados
      escreva("Digite o lado 1: ")
      leia(lado1)

      escreva("Digite o lado 2: ")
      leia(lado2)
      
      //processamento
      perimetro <- 2*lado1 + 2*lado2
      area <- lado1 * lado2
      
      //sa�da de resultados
      escreval("Per�metro: ", perimetro)
      escreval("�rea: ", area)
fimalgoritmo
