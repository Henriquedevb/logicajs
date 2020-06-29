let receber = require('prompt-sync')({sigint: true});
console.clear();
//entrada de dados
let sexo = receber('Informe o sexo: ');
let alt = Number(receber('Informe a altura: '));
//saída de dados
if(sexo === 'masculino' | sexo ==='Masculino'){
    let peso = (72.7 * alt) - 58;
    console.log('Seu peso ideal é ' + peso + 'kg.');
}
else if(sexo === 'feminino' | sexo ==='Feminino'){
    let peso = (62.1 * alt) - 44.7;
    console.log('Seu peso ideal é ' + peso + 'kg.');
}
else{
    console.log('Sexo inválido.')
}
