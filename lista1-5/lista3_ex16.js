let receber = require('prompt-sync')({sigint: true});
console.clear();
let nome = receber('Informe seu nome: ');
let sexo = receber('Informe seu sexo: ')
if (sexo == 'masculino' | sexo == 'Masculino'){
    console.log('Bom dia Ilmo. Sr. ' + nome + '.');
}
else if (sexo == 'feminino' | sexo == 'Feminino'){
    console.log('Bom dia Ilma. Sra. ' + nome + '.');
}
else{
    console.log('Sexo inválido.');
}