let receber = require('prompt-sync')({sigint: true});
console.clear();
let dia = Number(receber('Informe o dia do mês atual: '));
let vn = receber('Informe o valor nominal da conta: ');
if(dia >= 21 && dia <= 25){
    console.log('O valor, com um acréscimo de 2%, passou a ser R$' + vn * 1.02);
}
else if(dia >= 26 && dia <= 31){
    console.log('O valor, com um acréscimo de 4%, passou a ser R$' + vn * 1.04);
}
else if(dia >= 16 && dia <= 20){
    console.log('O valor a ser pago é o valor nominal: R$' + vn);
}
else if(dia >= 11 && dia <= 15){
    console.log('O valor, com um desconto de 2%, passou a ser R$' + vn * 0.98);
}
else if(dia >= 6 && dia <= 10){
    console.log('O valor, com um desconto de 4%, passou a ser R$' + vn * 0.96);
}
else if(dia >= 1 && dia <= 5){
    console.log('O valor, com um desconto de 6%, passou a ser R$' + vn * 0.94);
}
else{
    console.log('Dia inválido.')
}
