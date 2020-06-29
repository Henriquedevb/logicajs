/*
Ler um numero x digitado pelo usuário e verifique a existência dele em um
vetor de 30 posições (o usuário irá preencher este vetor antes da busca).
*/
const receber = require('prompt-sync')({sigint: true});
let x, flag=0, vetA = [2, 5, 9, 88, 22, 45, 81, 15, 17, 100, 1001, 85, 33, 44, 12];

console.clear();
//receber x
x = Number(receber("Digite x: "));

for(k=0; k<vetA.length; k++){
    if(vetA[k]==x){
        flag = 1;
        break;
    }
}
if(flag==1){
    console.log("encontrei!");
}
else{
    console.log("Não está no vetor!");
}
