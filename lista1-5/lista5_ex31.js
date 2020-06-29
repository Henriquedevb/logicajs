const receber = require('prompt-sync')({sigint: true});
let n, k, contn, somap;
contn = 0;
somap = 0;
console.log('Informe os números abaixo (positivos e negativos): ');

for(k=0; k < 5; k++){
    n = Number(receber());
    if(n >= 0){
        somap = somap + n;
    }
    else{
        contn++;
    }
}
console.log('Soma dos positivos: ' + somap);
console.log('Total de números negativos: ' + contn);