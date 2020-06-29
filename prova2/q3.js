const prompt = require('prompt-sync')({sigint: true});
let mtx = [
    [10, 20, 30, 40, 50],
    [10, 20, 30, 40, 50],
    [10, 20, 30, 40, 50],
    [10, 20, 30, 40, 50],
    [10, 20, 30, 40, 50]
];

k = 5;

for (let i = 0; i < 5; i++) {
    console.log(i);
}

/* 
Considerando uma matriz A quadrada N x N tal que 3 <= N <= 10. 
Considere ainda um laço for com uma variável "k" variando de "0" até "N", 
conforme as linhas da matriz, escolha, dentre as opções a seguir, a instrução 
que expressa qualquer elemento "E" da diagonal secundária.


[0][4]
[1][3]
[2][2]
[3][1]
[4][0]

*/

