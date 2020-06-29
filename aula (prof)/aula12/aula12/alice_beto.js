const receber = require('prompt-sync')({sigint: true});
let n, r, alice, beto, cont;
cont = 0;
alice = 0;
beto = 0;

console.clear();
n = Number(receber());
while(cont<n){
    r = Number(receber());
    if(r==0 || r==1){
        cont++;
        (r==0) ? alice++ : beto++;
    }
}
console.log("Alice ganhou "+alice + " e Beto ganhou "+beto);

