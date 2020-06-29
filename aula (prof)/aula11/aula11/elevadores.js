const receber = require('prompt-sync')({sigint: true});
let L, C, R1, R2, x, y, distancia, somaRaios;

console.clear();
do{
    L  = Number(receber());
    C  = Number(receber());
    R1 = Number(receber());
    R2 = Number(receber());
    if(L!=0 && C!=0 && R1!=0 && R2!=0){
        somaRaios = R1 + R2;
        x = L - somaRaios;
        y = C - somaRaios;
        distancia = Math.sqrt( Math.pow(x,2) + Math.pow(y,2) );
    
        if (somaRaios <= distancia){
            console.log("S");
        }
        else{
            console.log("N");
        } 
    }       
}while(L!=0 && C!=0 && R1!=0 && R2!=0);
