let receber = require('prompt-sync')({sigint: true});
console.clear();
let preco = Number(receber('Informe o valor do produto: '));
let cod = Number(receber('Informe o código do produto: '));
let novopreco = 0;
if(cod === 1){
    console.log('À vista em dinheiro ou cheque, recebe 10% de desconto.');
    novopreco = preco * 0.9;
    console.log('O novo preço é R$' + novopreco + '.');
}
else if(cod === 2){
    console.log('À vista no cartão de crédito, recebe 5% de desconto.');
    novopreco = preco * 0.95;
    console.log('O novo preço é R$' + novopreco + '.');
}
else if(cod === 3){
    console.log('Em duas vezes, preço normal de etiqueta sem juros.');
    console.log('O preço permanece o mesmo: R$' + preco + '.');
}
else if(cod === 4){
    console.log('Em trˆes vezes, pre¸co normal de etiqueta mais juros de 10%.');
    novopreco = preco * 1.1;
    console.log('O novo preço é R$' + novopreco + '.');
}
else{
    console.log('Código inválido.')
}