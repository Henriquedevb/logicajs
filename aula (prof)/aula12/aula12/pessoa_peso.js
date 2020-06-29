/*
Faça um programa que leia do teclado 5 conjuntos de 2 números 
inteiros. O primeiro valor representa a idade da pessoa; o segundo 
valor representa seu peso.
O programa deve escrever na tela três valores reais:
    O primeiro significa a média do peso das pessoas que têm 30 anos 
    ou menos;
    O segundo significa a média do peso das pessoas que têm mais de 
    30 anos;
    O terceiro significa a média do peso das 5 pessoas.
Os valores não precisam ser formatados, mas deve-se deixar ao menos 
um espaço em branco entre eles.
Se algum dos grupos não estiver representado na sequência, sua média 
deve ser considerada zero.
*/
const receber = require('prompt-sync')({sigint: true});
let idade, peso, cont, contMais30, contMenos30, media, mediaMais30, mediaMenos30;

console.clear();
contMais30 = 0;
contMenos30 = 0;
media = 0;
mediaMais30 = 0;
mediaMenos30 = 0;

for(cont=0; cont<5; cont++){
    idade = Number(receber("Digite a idade: "));
    peso = Number(receber("Digite o peso: "));

    if(idade <= 30){
        contMenos30++;
        mediaMenos30 += peso;
    }
    else{
        contMais30++;
        mediaMais30 += peso;
    }
    media += peso;    
}

mediaMais30 = mediaMais30/contMais30;
mediaMenos30 = mediaMenos30/contMenos30;
media = media / 5;

console.log(`${mediaMenos30} ${mediaMais30} ${media}`);