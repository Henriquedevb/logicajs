let receber = require('prompt-sync')();
console.clear();

let num = 0, qtdimpar = 0, qtdpar = 0;
console.log('Informe os números abaixo: ');
for (let k = 0 ; k < 20 ; k++){
    num = Number(receber( ));
    if(num%2===0){
        qtdpar++;
    }
    else{
        qtdimpar++;
    }
}
console.log('São ' + qtdpar + ' números pares e ' + qtdimpar + ' números ímpares.');