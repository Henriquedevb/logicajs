let receber = require('prompt-sync')({sigint: true});
console.clear();
let mediapesomenos30 = 0; //a
let mediapesomais30 = 0; //b
let mediatodos = 0; //c
let qtdpesomenos30 = 0;
let qtdpesomais30 = 0;
let pesomenos30 = 0;
let pesomais30 = 0;
let pesogeral = 0;

for(k = 0; k < 5; k++){
    let idade = Number(receber('Informe a idade: '));
    let peso = Number(receber('Informe o peso: '));
    if (idade<=30){
        qtdpesomenos30++;
        pesomenos30 = pesomenos30 + peso;
    }
    else if (idade>30){
        qtdpesomais30++;
        pesomais30 = pesomais30 + peso;
    }  
    pesogeral = pesogeral + peso;
}
mediatodos = pesogeral/5;
mediapesomenos30 = pesomenos30/qtdpesomenos30;
mediapesomais30 = pesomais30/qtdpesomais30;
console.log(mediapesomenos30/*resposta da A*/ , mediapesomais30/*Resposta da B*/ , mediatodos /*Resposta da C*/);