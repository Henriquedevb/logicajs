/*
Questão 10
Faça um programa que leia dois vetores de 10 elementos. Crie um vetor 
que seja a união entre os 2 vetores anteriores, ou seja, que contém os 
números dos dois vetores. Não deve conter números repetidos.*/
A = [5, 7, -9, 22, -41, 17, -12, -15, 4, -2];
B = [5, 32, 41, -15, 73, 17, 4, 7, 82, 23];

uniao = [];
console.clear();

//colocar todos os elementos de B no vetor uniao
for(k=0; k<B.length; k++){
    uniao[k] = B[k];
}

cont = uniao.length;

/*
testar os elementos cada elemento e A para ver se é igual, 
se for, colocar um sinalizador e interromper o laço interno*/
for(k=0; k<A.length; k++){
    flag = 0;
    for(j=0; j<B.length; j++){
        if(A[k] == B[j]){
            flag = 1;
            break;
        }
    }
    if(flag==0){
        uniao[cont++] = A[k];
    }
}

console.log(uniao);