algoritmo "algoritmo10"
//EXERC�CIO 05
//Escrever um algoritmo para receber uma nota de 0 a 10.
//Seu algoritmo deve atribuir um conceito conforme o seguinte:
//	0 at� 1.9 II
//  de 2 at� 4.9 - MI
//  de 5 at� 6.9 - MM
//  de 7 at� 8.9 - MS
//  de 9 at� 10  - SS
var
   nota : real
inicio
      //entrada de dados
      escreva("Digite a nota: ")
      leia(nota)
      //processamento e sa�da de resultados
      se (nota>=0) e (nota<=1.9) entao
         escreva("II")
      senao
           se (nota>=2) e (nota<=4.9) entao
              escreva("MI")
           senao
                se (nota>=5) e (nota<=6.9) entao
                   escreva("MM")
                senao
                     se (nota>=7) e (nota<=8.9) entao
                        escreva("MS")
                     senao
                        escreva("SS")
                     fimse
                fimse
           fimse
      fimse
fimalgoritmo
