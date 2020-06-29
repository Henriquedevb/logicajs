/*
Questão 12
Crie um programa que contenha uma função recursiva para encontrar o menor 
elemento em um vetor.
*/
function minRec(arr, pos, pmin){
    if(arr[pos] < arr[pmin]){
        pmin = pos;
    }
    if(pos < arr.length - 1){
        return minRec(arr, ++pos, pmin);
    }
    return arr[pmin];
}

vet = [8, 7, 5, 10, 20, 6, 44, -7, 33, -5, 12, -1];

console.log(`mínimo = ${minRec(vet, 0, 0)}`);