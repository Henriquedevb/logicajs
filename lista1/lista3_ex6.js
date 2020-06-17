const receber = require('prompt-sync')({sigint: true})
let n;
n = receber('Informe a nota do aluno (desconsidere a segunda casa depois da vírgula): ');
if(n <= 2.9){
    console.log('A menção do aluno é II.');
}
else if(n >= 3 && n <= 4.9){
    console.log('A menção do aluno é MI.');
}
else if(n >= 5 && n <= 6.9){
    console.log('A menção do aluno é MM.');
}
else if(n >= 7 && n <= 8.9){
    console.log('A menção do aluno é MS.');
}
else if(n >= 9 && n <= 10){
    console.log('A menção do aluno é SS.');
}
else{
    console.log('Nota inválida.')
}