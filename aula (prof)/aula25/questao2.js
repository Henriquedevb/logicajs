/*
Questão 2
Considere um vetor A de N posições, tal que 7 <= N <= 1000. Escreva um programa que imprima a soma dos valores que estão na segunda posição e na penúltima posição do vetor A e o produto dos elementos que estão na primeira posição e na antepenúltima posição do vetor A.
Exemplo: Para o vetor A = [7, 8, 9, 5, 1, 6, 4, 3, 2] → soma = 11, produto = 28
*/
A = [7, 8, 9, 5, 1, 6, 4, 3, 2] 
N = A.length;

soma = A[1] + A[N-2];
prod = A[0] * A[N-3];

console.log(`soma = ${soma}, produto = ${prod}`);