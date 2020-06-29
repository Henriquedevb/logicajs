/*
Questão 03
Leia um vetor pré-existente de 10 posições. Contar e escrever quantos 
valores pares ele possui.
*/
let vet = [7, 3, 18, 15, 21, 82, 47, 33, 81, 28], pares=0;

for(k=0; k<vet.length; k++){
    if( vet[k]%2 == 0 ){
        //pares = pares + 1;
        pares++;
    }
}
console.log(`total de pares = ${pares}`);