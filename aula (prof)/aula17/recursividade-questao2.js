/*
Questão 02
Faça uma função recursiva que calcule e retorne o fatorial de um número 
inteiro N. 
5! = 5 * 4!
5! = 5 * 4 * 3!
5! = 5 * 4 * 3 * 2!
5! = 5 * 4 * 3 * 2 * 1!
5! = 5 * 4 * 3 * 2 * 1

*/
function fatorial(n){
    if(n==1 || n==0){
        return 1;
    }
    return n * fatorial(n-1);
}

n = 4;

console.log(`fatorial de ${n} = ${fatorial(n)}`);