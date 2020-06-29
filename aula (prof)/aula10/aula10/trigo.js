const receber = require('prompt-sync')({sigint: true});
let n, x, graos, peso, cont;
console.clear();
n = Number(receber());
for(cont=0; cont<n; cont++){
    graos = 0;
    peso = 0;
    x = Number(receber());
    while(x>0){
        graos = graos + Math.pow(2, (x-1));
        x--;
    } 
    //peso = (graos/12);  //peso em gramas
    //peso = peso/1000;   //peso em kg;

    peso = (graos - graos%12000)/12000;

    console.log(peso + " kg");
}