const receber = require('prompt-sync')({sigint: true});
console.clear()
let maiornum = 0;
let menornum = (10**10000000000000);
for(k=0; k < 5; k++){
    let num = Number(receber('Digite um valor: '));
    if (num > maiornum) {
        maiornum = num;
    }
    if (num < menornum) {
        menornum = num;
    }
}
console.log('O maior número é ' + maiornum, 'e o menor número é ' + menornum + '.');