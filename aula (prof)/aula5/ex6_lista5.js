/*
Escreva um algoritmo que imprima todos os números 
múltiplos de 5, no intervalo fechado de 1 a 500.
*/
let num;
for(num=1; num<=500; num++){
    if(num % 5==0){
        console.log(num);
    }
}