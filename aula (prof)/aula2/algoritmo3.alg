//Escrever um algoritmo para receber os lados de um retângulo e imprimir:
// - A área
// - O perímetro
algoritmo "algoritmo3"
var
   lado1, lado2: real
   perimetro, area: real
   //criar duas variáveis do tipo real para representar os lados
   //criar mais duas variáveis para armazenar o perímetro e a área (tipo real)
inicio
      //entrada de dados
      escreva("Digite o lado 1: ")
      leia(lado1)

      escreva("Digite o lado 2: ")
      leia(lado2)
      
      //processamento
      perimetro <- 2*lado1 + 2*lado2
      area <- lado1 * lado2
      
      //saída de resultados
      escreval("Perímetro: ", perimetro)
      escreval("Área: ", area)
fimalgoritmo
