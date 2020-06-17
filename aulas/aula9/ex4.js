const receber = require('prompt-sync')();

let notaM = 0;
let qtdM = 0;

let qtdTt = 0;
let notaTt = 0;

let notaH = 0;
let qtdH = 0;

for (let n = 0; n < 5; n++){
    let sexo = receber('Digite o sexo: ');
    let nota = receber('Digite a nota da pessoa: ');

    nota = Number(nota);

    if (sexo === '1'){
        //vai fazer algo
        qtdH++;
        notaH += Number(nota);
    }
    else{
        //vai fazer algo como mulher
        qtdM++;
        notaM += Number(nota);
    }

    qtdTt++;
    notaTt++;
}

console.log('A média da nota dos homens é: ' + notaH / qtdH);
console.log('A média da nota das mulheres é: ' + notaM / qtdM);
console.log('A média da nota total é: ' + notaTt / qtdTt);