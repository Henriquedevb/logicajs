/*
 Criar um algoritmo que imprima todos os números de 1 ate 100, 
 inclusive, e a soma detodos eles.
*/
let soma;
soma = 0;
for(k=1; k<=100; k++){
    console.log(k);
    soma = soma + k;
}
console.log("soma = "+soma);