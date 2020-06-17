let receber = require('prompt-sync')({sigint: true});
let x, cont;
x = 0;
for(cont=1; cont<=10; cont++){
    x = x + 2*cont;
    if(x > 10){
        x = 10;
    }
    else if( (x > 15) && (x < 20)){
        x = 15;
    }
    else{
        x = 0;
    }
    console.log(x);
}