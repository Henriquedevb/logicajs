const receber = require('prompt-sync')({sigint: true})
let a, b, c, d;
console.log('Os valores necessitam ser diferentes uns dos outros.')
a = Number(receber('Digite o valor de a: '));
b = Number(receber('Digite o valor de b: '));
c = Number(receber('Digite o valor de c: '));
d = Number(receber('Digite o valor de d: '));
if(a > b && a > c && a > d){
    if(b < c && b < d){
        console.log('O maior valor é o de a (' + a + ') e o menor valor é o de b (' + b + ').');
    }
    else if(c < b && c < d){
        console.log('O maior valor é o de a (' + a + ') e o menor valor é o de c (' + c + ').');
    }
    else{
        console.log('O maior valor é o de a (' + a + ') e o menor valor é o de d (' + d + ').');
    }
}
else if(b > a && b > c && b > d){
    if(a < c && a < d){
        console.log('O maior valor é o de b (' + b + ') e o menor valor é o de a (' + a + ').');
    }
    else if(c < a && c < d){
        console.log('O maior valor é o de b (' + b + ') e o menor valor é o de c (' + c + ').');
    }
    else{
        console.log('O maior valor é o de b (' + b + ') e o menor valor é o de d (' + d + ').');
    }
}
else if(c > a && c > b && c > d){
    if(a < b && a < d){
        console.log('O maior valor é o de c (' + c + ') e o menor valor é o de a (' + a + ').');
    }
    else if(b < a && b < d){
        console.log('O maior valor é o de c (' + c + ') e o menor valor é o de b (' + b + ').');
    }
    else{
        console.log('O maior valor é o de c (' + c + ') e o menor valor é o de d (' + d + ').');
    }
}
else if(d > a && d > b && d > c){
    if(a < b && a < c){
        console.log('O maior valor é o de d (' + d + ') e o menor valor é o de a (' + a + ').');
    }
    else if(b < a && b < c){
        console.log('O maior valor é o de d (' + d + ') e o menor valor é o de b (' + b + ').');
    }
    else if(c < a && c < b){
        console.log('O maior valor é o de d (' + d + ') e o menor valor é o de c (' + c + ').');
    }
}
else{console.log('Os valores necessitam ser diferentes uns dos outros.')}