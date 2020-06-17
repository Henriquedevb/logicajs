/*
A serie de Fibonacci é formada pela sequência: 1,1,2,3,5,8,13,21,34,55,...
Escreva umalgoritmo que gere a serie de FIBONACCI ate o Nésimo termo.
*/
const receber = require('prompt-sync')({sigint: true});
let termo1, termo2, termo_corrente, N, cont, fibo;

fibo = "";
cont = 0;
termo_corrente = 0;
termo1 = 1;
termo2 = 1;

N = Number(receber("Digite N: "));
while(cont < N){
    if(cont==0){
        //fibo = fibo + termo1 + ", ";
        fibo += termo1 + ", ";
    }
    else if(cont==1){
        //fibo = fibo + termo2 + ", ";
        fibo += termo2 + ", ";
    }
    else{
        termo_corrente = termo1 + termo2;
        termo1 = termo2;
        termo2 = termo_corrente;
        fibo += termo_corrente + ", ";
    }
    cont++;
}
console.log(fibo);