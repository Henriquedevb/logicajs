let receber = require('prompt-sync')({sigint: true});
console.clear()
let num = Number(receber('Digite um número para verificar se ele é par ou ímpar: '))
if(num == 0){
    console.log('Zero não é par nem ímpar.')
}
else if(num%2 == 0){
    console.log('O número é par.')
}
else{
    console.log('O número é ímpar.')
}
