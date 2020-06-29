/*
Questão 09
Faça um programa que leia dois vetores de 10 elementos. Crie um vetor 
que seja a intersecção entre os 2 vetores anteriores, ou seja, que 
contém apenas os números que estão em ambos os vetores. Não deve conter 
números repetidos.
*/
A = [5, 7, -9, 22, -41, 17, -12, -15, 4, -2];
B = [5, 32, 41, -15, 73, 17, 4, 7, 82, 23];
inter = [];
cont = 0;
console.clear();

for(k=0; k<A.length; k++){
    for(j=0; j<B.length; j++){
        if(A[k] == B[j]){
            inter[cont++] = A[k];
            break;
        }
    }
}

console.log(inter);