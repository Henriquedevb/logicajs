let receber = require('prompt-sync')({sigint: true});
console.clear();
let idade = Number(receber('Informe a idade do atleta: '));
if (idade < 5){
    console.log('Muito jovem.');
}
else if (idade >= 5 && idade < 8){
    console.log('Infantil A.');
}
else if (idade >= 8 && idade <= 10){
    console.log('Infantil B.');
}
else if (idade >= 11 && idade <= 13){
    console.log('Juvenil A.');
}
else if (idade >= 13 && idade <= 17){
    console.log('Juvenil B.');
}
else if (idade >= 18){
    console.log('Adulto.');
}