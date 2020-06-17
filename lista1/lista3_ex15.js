let receber = require('prompt-sync')({sigint: true});
console.clear()
let num = Number(receber('Digite um número: '))
if(num >= 1 && num <= 9){
    console.log('Valor dentro da faixa permitida.')
}
else{
    console.log('Valor fora da faixa permitida.')
}
