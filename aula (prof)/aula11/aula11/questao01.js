/*
Faça um programa que leia do teclado uma sequência de números inteiros, 
que podem ser positivos ou negativos, porém estes números NÃO devem estar 
no intervalo fechado entre -5 e 5. A sequência se encerra caso seja
digitado um desses números do intervalo, ou seja 
{-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5}, pois esses números não fazem parte 
da sequência, mas servem apenas para sinalizar o seu final.
O programa deve escrever na tela os seguintes números inteiros:
• a quantidade de números da sequência de entrada (sem contar os números do
intervalo de -5 e 5);
• a quantidade de números negativos
• a quantidade de números positivos.
• o maior valor digitado.
• o menor valor digitado.
Todos os valores de saída devem ser colocados em uma mesma linha, sem 
formatação, mas deixando ao menos um espaço em branco entre eles.
*/
const receber = require('prompt-sync')({sigint: true});
let n, max, min, qtd, qtdNeg, qtdPos;
//inicializações
qtd = 0;
qtdNeg = 0;
qtdPos = 0;

console.clear();
do{
    n = Number(receber("Digite um número: "));
    if(n<-5 || n>5){
        /*if(n>0){
            qtdPos++;
        }
        else{
            qtdNeg++;
        }*/

        //operador ternário
        (n>0) ? qtdPos++ : qtdNeg++;

        qtd++;
        if(qtd==1){  //primeira iteração.
            max = n;
            min = n;
        }
        if(n > max){
            max = n; //atualizando o valor máximo
        }
        if(n < min){
            min = n; //atualizando o valor mínimo
        }
    }
}while(n<-5 || n>5);
if(qtd==0){
    max = 0;
    min = 0;
}

console.log(qtdNeg + ", " + qtdPos + ", " + qtd + ", " + max + ", "+ min);
