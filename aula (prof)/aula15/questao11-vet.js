/*
Questão 11
Faça um programa que leia um vetor de 15 posições e o compacte, ou seja, 
elimine as posições com valor zero. Para isso, todos os elementos à 
frente do valor zero, devem ser movidos uma posição para trás no vetor.
*/
vet=[5, 32, 41, -15, 73, 0, 4, 7, 82, 0, 23, -9, 0, -41, -12, -2];

console.clear();

for(k=0; k<vet.length; k++){
    if(vet[k] == 0){
        vet.splice(k, 1);
    }
}

console.log(vet);
