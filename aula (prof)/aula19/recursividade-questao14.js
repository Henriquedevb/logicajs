/*
Questão 14
O máximo divisor comum dos inteiros x e y é o maior inteiro que é 
divisı́vel por x e y. Escreva uma função recursiva mdc que retorna o 
máximo divisor comum de x e y. O mdc de x e y é definido como segue: 
se y é igual a 0, então mdc(x,y) é x; caso contrário, mdc(x,y) é 
mdc (y, x%y), onde % é o operador resto.
*/
const receber = require('prompt-sync')({sigint: true});

function mdc(x, y){
    if(y > 0){
       return mdc(y, (x%y));
    }
    return x;
}

console.clear();

a = Number(receber("Digite a: "));
b = Number(receber("Digite b: "));
min = Math.min(a, b);
max = Math.max(a, b);

console.log(`MDC(${max}, ${min}) = ${mdc(max, min)}`);