/*
Questão 12
A serie de Fibonacci e formada pela sequência: 
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ... Escrever um programa que receba um 
valor inteiro e contenha uma função que recebe no parâmetro um número que 
indica a posição do termo e retorna o valor correspondente na sequência 
de Fibonacci.
*/
const receber = require('prompt-sync')({sigint: true});
function fibonacci(n){
    if( n==1 || n ==2 ){
        return 1;
    }
    else{
        t1 = 1;     //1º termo
        t2 = 1;     //2º termo
        for(k=3; k<=n; k++){
            t3 = t2 + t1;   //um termo formado pela soma dos termos anteriores
            t1 = t2;
            t2 = t3;
        }
        return t3;
    }
}

pos = Number(receber("Digite a posição do termo que deseja: "));
termo = fibonacci(pos);

console.log(`Termo da posiçao ${pos} = ${termo}`);

