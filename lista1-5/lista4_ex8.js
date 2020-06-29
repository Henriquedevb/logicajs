const receber = require('prompt-sync')();
console.clear();

let cod = Number(receber('Código do produto: '));

if(cod == 1){
    console.log('Alimento não perecível.');
}
else if(cod >= 2 && cod <= 4){
    console.log('Alimento perecível.');
}
else if(cod == 5 | cod == 6){
    console.log('Vestuário.');
}

else if(cod == 7){
    console.log('Higiene pessoal.');
}
else if(cod >= 8 && cod <= 15){
    console.log('Limpeza e utensílios domésticos');
}
else{
    console.log('Código inválido.');
}