algoritmo "Intervalo1a100"
var
   n : inteiro
   dobro : inteiro
inicio
   escreva("Digite um número: ")
   leia(n)
   //1 <= n <= 100
   se (n>=1) e (n<=100) entao
      dobro <- 2*n
      escreva("O dobro de n é: ", dobro)
   senao
      escreva("Valor fora do intervalo!")
   fimse
fimalgoritmo
