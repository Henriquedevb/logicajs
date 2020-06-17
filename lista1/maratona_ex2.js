const receber = require('prompt-sync')({sigint: true});
console.clear();
let l, c, r1, r2, x, y, dist, somaR;

do{
    l = Number(receber());
    c = Number(receber());
    r1 = Number(receber());
    r2 = Number(receber());

    if(l != 0 && c != 0 && r1 != 0 && r2 != 0){
        somaR = r1 + r2;
        x = l - somaR;
        y = c - somaR;
        dist = Math.sqrt(x * x + y * y);
        if(somaR <= dist){
            console.log('S');
        }
        else{
            console.log('N');
        }
    }
}while(l != 0 && c != 0 && r1 != 0 && r2 != 0);