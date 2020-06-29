const receber = require('prompt-sync')({sigint: true});
let x0, y0, xp, yp, dist;
//inicializando a origem
x0=0;
y0=0;

console.clear();
xp = Number(receber("Digite a coordenada x do ponto: "));
yp = Number(receber("Digite a coordenada y do ponto: "));

dist = Math.sqrt( Math.pow((xp-x0),2) + Math.pow((yp-y0),2));

if(dist <= 1){
    if(xp>0 && yp>0){
        console.log("Quadrante 1");
    }
    else if(xp<0 && yp>0){
        console.log("Quadrante 2");
    }
    else if(xp<0 && yp<0){
        console.log("Quadrante 3");
    }
    else if(xp>0 && yp<0){
        console.log("Quadrante 4");
    }
    else if(xp>0 && yp==0){
        console.log("Entre os quadrantes 1 e 4");
    }
    else if(xp<0 && yp==0){
        console.log("Entre os quadrantes 2 e 3");
    }
    else if(xp==0 && yp>0){
        console.log("Entre os quadrantes 1 e 2");
    }
    else if(xp==0 && yp<0){
        console.log("Entre os quadrantes 3 e 4");
    }
    else if(xp==0 && yp==0){
        console.log("Está na origem.");
    }
}
else{
    console.log("O ponto está fora do círculo.");
}