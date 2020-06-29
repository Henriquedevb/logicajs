const receber = require('prompt-sync')({sigint: true});
let k, n, x, y, coelhos, galinhas;

console.clear();

n = Number(receber());

for(k=0; k<n; k++){
    x = Number(receber()); 
    y = Number(receber());

    coelhos = (y - 2*x)/2;
    galinhas = x - coelhos;
    
    console.log(`${galinhas} ${coelhos}`);
}

