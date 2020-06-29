/*
Questão 13
Faça uma função recursiva que receba um número inteiro positivo impar N 
e retorne o fatorial duplo desse número. O fatorial duplo é definido como 
o produto de todos os números naturais ı́mpares de 1 até algum número 
natural ı́mpar N. Assim, o fatorial duplo de 5 é
5!! = 1 ∗ 3 ∗ 5 = 15
*/
const receber = require('prompt-sync')({sigint: true});

function duploFatRec(n){
    if(n>0 && n%2==0){
        n--;  //faz n virar o ímpar imediatamente anterior, caso n seja par
    }
    if(n <= 0){
        return 1;
    }
    return n * duploFatRec(n-2);
}

n = Number(receber("Digite n: "));
fat = duploFatRec(n);
console.log(`Fatorial duplo de ${n} = ${fat}`);