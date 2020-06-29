/*
Questão 1
Considere um vetor A de N posições, tal que 5 <= N <= 1000. Escreva um programa que imprima a soma dos valores até o meio do vetor A (inclusive) e o produto dos elementos que estão acima da posição do meio de A. Obs.: Caso N seja par, considere como o meio do vetor o primeiro valor inteiro abaixo do meio.
Exemplo: Para o vetor A = [7, 8, 9, 5, 1, 6, 4, 3, 2] → soma = 30, produto = 144
*/
A = [7, 8, 9, 5, 1, 6, 4, 3, 2]
N = A.length;
//console.log(`tamanho = ${N}`);
meio = Math.floor((N-1)/2);
//console.log(meio);
soma = 0;
for(k=0; k<=meio; k++){
    soma += A[k];
}

prod = 1;
for(k=meio+1; k<N; k++){
    prod *= A[k];
}

console.log(`soma = ${soma}, produto = ${prod}`);
