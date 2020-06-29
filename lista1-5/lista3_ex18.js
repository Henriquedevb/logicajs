let receber = require('prompt-sync')({sigint: true});
console.clear();
let sal = Number(receber('Informe o salário do funcionário: R$'));
let reaj;
if (sal < 500){
    reaj = sal + (sal*0.15);
    console.log('Com o reajuste, o salário do funcionário vai passar a ser R$' + reaj + '.');
}
else if (sal >= 500 && sal < 1000){
    reaj = sal + (sal*0.1);
    console.log('Com o reajuste, o salário do funcionário vai passar a ser R$' + reaj + '.');
}
else{
    reaj = sal + (sal*0.05);
    console.log('Com o reajuste, o salário do funcionário vai passar a ser R$' + reaj + '.');
}
