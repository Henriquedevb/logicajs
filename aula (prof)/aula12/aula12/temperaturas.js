/*
O primeiro significa a média das temperaturas do verão;
O segundo representa a média das temperaturas do inverno;
O terceiro representa a média geral das temperaturas.
O quarto representa a temperatura mínima
O quinto representa a temperatura máxima
*/
const receber = require('prompt-sync')({sigint: true});
let estacao, temperatura, contVer, cont, contInv, media, mediaVer, mediaInv, max, min

contVer = 0;
contInv = 0;
mediaVer = 0;
mediaInv = 0;
media = 0;

console.clear();
for(cont=0; cont<5; cont++){
    estacao = Number(receber("Estação [1-Verão | 2-Inverno]: "));
    temperatura = Number(receber("Temperatura: "));

    if(cont == 0){  //primeira iteração do laço for
        min = temperatura;
        max = temperatura;
    }
    if(temperatura > max){
        max = temperatura;
    }
    if(temperatura < min){
        min = temperatura;
    }

    if(estacao == 1){
        contVer++;  //contador
        mediaVer = mediaVer + temperatura; //acumulador
    }
    else if(estacao == 2){
        contInv++;
        mediaInv = mediaInv + temperatura;
    }
    media = media + temperatura;
}
mediaVer = mediaVer / contVer;
mediaInv = mediaInv / contInv;
media = media / 5;

console.log(`${mediaVer} ${mediaInv} ${media} ${min} ${max}`);
