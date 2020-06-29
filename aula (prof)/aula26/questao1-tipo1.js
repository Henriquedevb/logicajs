/*
Questão 1
Faça um programa para ler as dimensões de um terreno (comprimento c e largura l), bem como o preço do metro de tela. Imprima o custo para cercar este mesmo terreno com tela, com o acréscimo de 10% para o pagamento da mão de obra.
*/

const receber = require('prompt-sync')({sigint: true});

c = Number(receber('Digite o comprimento: '));
l = Number(receber('Digite a largura: '));
p = Number(receber('Digite o preço: '));

//custo = (2*c+2*l)*p + (2*c+2*l)*p/10;
custo = (2*c+2*l)*p * 1.1;
console.log(`Custo = R$ ${custo}`);

