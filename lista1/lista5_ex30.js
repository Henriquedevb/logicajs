let receber = require('prompt-sync')();
console.clear();

let num = 0, qtd = 0;
console.log('Informe os números abaixo: ');
for (let k = 0 ; k < 15 ; k++){
    num = Number(receber( ));
    if(num>30){
        qtd++;
    }
}
console.log('São ' + qtd + ' números maiores que 30.');