/*
Faça um programa para receber 5 notas de um aluno e calcule a média
*/
const receber = require('prompt-sync')({sigint: true});
let nota, media;
console.clear();
nota = [];
//media = 0; //inicializar

//console.log("media = " + media);

/*for(k=0; k<5; k++){
    nota[k] = Number(receber(`Valor posição ${k}: `));
    //media += nota[k];
    media = media + nota[k];
}*/

nota[0] = 5.5;
nota[1] = 10;
nota[2] = 8.7;
nota[3] = 9.3;
nota[4] = 4.6;

media = (nota[0]+nota[1]+nota[2]+nota[3]+nota[4])/5;

console.log(`Média = ${media}`);



//receber as notas

