/*
Ler um conjunto de números reais, armazenando-o em vetor e calcular o 
quadrado das componentes deste vetor, armazenando o resultado em outro 
vetor. Os conjuntos têm 10 elementos cada. Imprimir todos os conjuntos.
*/
const receber = require('prompt-sync')({sigint: true});
console.clear();
vet1=[];
vet2=[];

for(k=0; k<10; k++){
    vet1[k] = Number(receber(`Valor da pos. ${k}: `));
    vet2[k] = Math.pow(vet1[k], 2);
    //vet2[k] = vet1[k] * vet1[k];
}

console.log(`vet1 = ${vet1}`);
console.log(`vet2 = ${vet2}`);