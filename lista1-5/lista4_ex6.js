const receber = require('prompt-sync')();
console.clear();
let preco = receber('Informe o preço do produto: R$');
let cod = Number(receber('Código do produto: '));

if(cod == 1){
    console.log('O preço do produto é: R$' + preco + ' e sua região de origem é sul.');
}
else if(cod == 2){
    console.log('O preço do produto é: R$' + preco + ' e sua região de origem é norte.');
}
else if(cod == 3){
    console.log('O preço do produto é: R$' + preco + ' e sua região de origem é leste.');
}
else if(cod == 4){
    console.log('O preço do produto é: R$' + preco + ' e sua região de origem é oeste.');
}
else if(cod == 5 | cod == 6){
    console.log('O preço do produto é: R$' + preco + ' e sua região de origem é nordeste.');
}

else if(cod >= 7 && cod <= 9){
    console.log('O preço do produto é: R$' + preco + ' e sua região de origem é sudeste.');
}
else if(cod >= 10 && cod <= 20){
    console.log('O preço do produto é: R$' + preco + ' e sua região de origem é centro-oeste.');
}
else if(cod >= 25 && cod <= 30){
    console.log('O preço do produto é: R$' + preco + ' e sua região de origem é nordeste.');
}
else{
    console.log('Código inválido.')
}