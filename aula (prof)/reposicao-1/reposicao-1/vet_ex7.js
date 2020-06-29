/*
Questão 07
Faça um programa que leia um vetor pré-existente com 10 números reais, 
calcule e mostre a quantidade de números negativos e a soma dos números 
positivos desse vetor.
*/
vet = [5, 7, -9, 22, -41, 17, -12, -15, 4, -2];
qtdNeg = 0;     //contador
somaPos = 0;    //acumulador

console.clear();

for(k=0; k<vet.length; k++){
    if(vet[k]>=0){
        //somaPos = somaPos + vet[k];
        somaPos += vet[k];
    }
    else{
        qtdNeg++;
    }
}

console.log(`Qtd. de negativos: ${qtdNeg} | soma de positivos: ${somaPos}`);
