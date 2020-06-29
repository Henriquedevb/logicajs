const receber = require('prompt-sync')();
console.clear();

let birth = receber('Digite, em ordem e separado por espaços, seu dia, mês e ano de nascimento: ');
let age = 0;
let values = birth.split(' ');

var d = new Date,
        ano_atual = d.getFullYear(),
        mes_atual = d.getMonth() + 1,
        dia_atual = d.getDate();
if(values[1] > mes_atual |( values[1] == mes_atual && values[0] >= dia_atual)){
    age = ano_atual - values[2] - 1;
}
else{
    age = (ano_atual - values[2]);
}
console.log('Você tem ' + age + ' anos.');
if (age >= 16){
    console.log('Você tem idade para votar.');
}
else{
    console.log('Você não tem idade para votar');
}
if ( age >= 18){
    console.log('Você tem idade para dirigir.');
}
else{
    console.log('Você não tem idade para dirigir.');
}