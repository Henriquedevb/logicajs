let receber = require('prompt-sync')({sigint: true});
console.clear();
let cod = Number(receber('Informe a forma de pagamento: '));
if(cod === 1){
    console.log('Dinheiro.');
}
else if(cod === 2){
    console.log('Cheque.');
}
else if(cod === 3){
    console.log('Cartão de crédito.');
}
else if(cod === 4){
    console.log('Cartão de débito.');
}
else if(cod === 5){
    console.log('Nota promissória.');
}
else{
    console.log('Código inválido.');
}