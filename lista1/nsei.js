const receber = require('prompt-sync')({sigint: true})
let n, k, cont1, cont2;
cont1 = 0;
cont2 = 0;

for(k = 0; k < 10; k++){
    n = Number(receber("Digite um número: "))
    if(n%2==0){
        cont1++;
    }
    else{
        cont2++;
    }
}

saida = "Total de pares: "+ cont1 + "\nTotal de ímpares: " + cont2
console.log(saida)