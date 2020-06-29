/*
A entrada do programa deve receber: As coordenadas do ponto P1, que 
representa o centro dos círculos concêntricos; o valor “r” para o 
raio do círculo inscrito, o valor “R” para o raio do círculo
circunscrito e as coordenadas de um outro ponto P2 qualquer.
*/
const receber = require('prompt-sync')({sigint: true});
let x1, y1, x2, y2, r, R, dist, area;

console.clear();
x1 = Number(receber("Digite x do centro dos círculos: "));
y1 = Number(receber("Digite y do centro dos círculos: "));

r = Number(receber("Digite o raio do círculo pequeno: "));
R = Number(receber("Digite o raio do círculo grande: "));

x2 = Number(receber("Digite x do ponto P: "));
y2 = Number(receber("Digite y do ponto P: "));

dist = Math.sqrt( Math.pow((x2-x1),2) + Math.pow((y2-y1),2) );

if(dist>=r && dist<=R){  //distância entre R e r (dentro do anilho)
    console.log("1");
}
else{
    console.log("0");
}

area = Math.PI*(R+r)*(R-r);
console.log("Área = " + area);
