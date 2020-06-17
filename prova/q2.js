let receber = require('prompt-sync')({sigint: true});
console.clear();
let mediatverao = 0; //A
let mediatinverno = 0; //B
let mediatgeral = 0; //C
let tminima = 10000000; //D
let tmaxima = 0; //E
let qtdverao = 0;
let qtdinverno = 0;
let tempverao = 0;
let tempinverno = 0;
let tempgeral = 0;

for(k = 0; k < 5; k++){
    let estacao = Number(receber('Informe a estação (1 para verão, 2 para inverno): '));
    let temperatura = Number(receber('Informe a temperatura em ºC: '));
    if (estacao==1){
        qtdverao++;
        tempverao = tempverao + temperatura;
    }
    else if (estacao==2){
        qtdinverno++;
        tempinverno = tempinverno + temperatura;
    }
    tempgeral = tempgeral + temperatura;
    if(temperatura > tmaxima){
        tmaxima = temperatura;
    }
    if(temperatura < tminima){
        tminima = temperatura;
    }
}
mediatverao = tempverao/qtdverao;
mediatinverno = tempinverno/qtdinverno;
mediatgeral = tempgeral/5;
console.log(mediatverao /*Resposta da A */ , mediatinverno /*Resposta da B*/, mediatgeral /*Resposta da C*/, tminima /*Resposta da D*/, tmaxima /*Resposta da E*/);
