const receber = require('prompt-sync')();
console.clear();

let N, cont, metade, primo; 
primo = true;
cont = 2;

N = Number(receber("Digite o número N: "));
metade = N/2 + 1;

while(cont < metade){
    if(N%cont == 0){
        primo = false;
        break;
    }
    cont++;
}
if(primo){
    console.log("É primo!");
}
else{
    console.log("NÃO É primo!");
}