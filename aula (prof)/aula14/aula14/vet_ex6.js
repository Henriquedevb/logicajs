/*
Questão 06
Fazer um programa para ler 5 valores e, em seguida, mostrar a posição 
onde se encontram o maior e o menor valor.
*/
const receber = require('prompt-sync')({sigint: true});
console.clear();
vet = [];
pmax = 0;
pmin = 0;

for(k=0; k<5; k++){
    vet[k] = Number(receber(`Valor da pos. ${k}: `));
    if( vet[k] > vet[pmax] ){
        pmax = k;
    }
    if( vet[k] < vet[pmin] ){
        pmin = k;
    }
}
console.log(vet);
console.log(`Pos. do max = ${pmax}  |  Pos. do min = ${pmin} `);