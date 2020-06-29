/*
Considere um plano cartesiano com os eixos x (abiscissas) e y (ordenadas)
Escrever um algoritmo para receber as coordenadas x e y do centro de um
círculo e um valor R para o raio deste círculo.

Seu programa deve receber ainda as coordenadas x e y de um ponto P e 
informar se o ponto P está dentro ou fora do círculo.
*/

const receber = require('prompt-sync')({sigint: true});
let xc, yc, r, xp, yp, d;

//montando o círculo
xc = Number(receber("Digite o X do centro do círculo: "));
yc = Number(receber("Digite o Y do centro do círculo: "));
r  = Number(receber("Digite o raio do círculo: "));

//gerando um ponto
xp = Number(receber("Digite o X do ponto P: "));
yp = Number(receber("Digite o Y do ponto P: "));

//calcular a distância de P até o centro do círculo
d = Math.sqrt( Math.pow((xp-xc), 2) + Math.pow((yp-yc), 2) );

if(d <= r){
    console.log("Está dentro do círculo");
}
else {
    console.log("Está fora do círculo");
}
