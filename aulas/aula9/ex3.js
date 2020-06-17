const receber = require('prompt-sync')();

let qdeNumeros = 0;
let valorMx = 0;

while(true){
    let n = receber('Digite um número: ');
    
    if(n=== '0') {
        break;
    }
    
    qdeNumeros++;

    n = Number(n);

    if(n > valorMx){
        valorMx = n;
    }
}

console.log(qdeNumeros , valorMx)
