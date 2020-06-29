let receber = require('prompt-sync')();
console.clear();
let limiteinf = 0, limitesup = 0, limite = 0, num = 0, soma = 0;

limiteinf = Number(receber('Informe o limite inferior do intervalo: '));
limitesup = Number(receber('Informe o limite superior do intervalo: '));
limite = limitesup - limiteinf;
num = limiteinf + 1;

for(let k = 0; k < limite; k++){
    
    if(num%2 == 0){
        soma = soma + num;
        console.log(num);
    }
    num = num + 1;
}
console.log('A soma é: ' + soma);