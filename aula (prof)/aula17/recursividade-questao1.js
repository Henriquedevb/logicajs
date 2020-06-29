/*
Questão 01
Crie uma função recursiva que receba um número inteiro positivo N e 
calcule o somatório dos números de 1 a N.
*/ // N = 5  --> 5 + 4 + 3 + 2 + 1 
// uma função recursiva é definida em termos de si mesma.
function somaRec(n){
    if(n == 1){
        return 1;
    }
    return n + somaRec(n-1);
}

console.clear();
num = 5;

console.log(`soma = ${somaRec(num)}`);