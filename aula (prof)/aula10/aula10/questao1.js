/*
QUESTÃO 01
Faça um programa em Linguagem Javascript que leia do teclado 5 duplas 
de variáveis formadas por um caractere e um número inteiro.
O programa deve escrever na tela dois valores inteiros:
  * o primeiro significa a soma dos valores inteiros que apareceram ao 
    lado de vogais,
  * o segundo significa o número de vezes que ocorre um ‘a’ seguido de 
  um número par.
Os dois valores devem ser escritos em uma única linha. Os valores não 
precisam ser formatados, mas deve-se deixar ao menos um espaço em 
branco entre eles.
*/
const receber = require('prompt-sync')({sigint: true});
let letra, num, cont, soma, k;

//inicializações
soma = 0;
cont = 0;

console.clear();
for(k=0; k<5; k++){
    letra = receber();
    num   = Number(receber());

    if(letra == 'a' || 
       letra == 'e' ||
       letra == 'i' ||
       letra == 'o' ||
       letra == 'u'){
        //soma = soma + num;
        soma += num;
    }
    if(letra == 'a' && num%2==0){
        cont++;
    }
}
console.log(soma + ", " + cont);
