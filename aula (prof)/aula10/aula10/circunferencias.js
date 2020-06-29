const receber = require('prompt-sync')({sigint: true});
let x1, y1, x2, y2, r1, r2, dist;
//entrada de dados
console.clear();
x1 = Number(receber("Digite x ponto do centro de C1: "));
y1 = Number(receber("Digite y ponto do centro de C1: "));
r1 = Number(receber("Digite o raio de C1: "));

x2 = Number(receber("Digite x ponto do centro de C2: "));
y2 = Number(receber("Digite y ponto do centro de C2: "));
r2 = Number(receber("Digite o raio de C2: "));

dist = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2));
console.log("*****************************");
console.log("Distância entre os centros de C1 e C2: " + dist);

if(dist == 0){
    console.log("Circunferências concêntricas");
}
else if(dist < (r1-r2)){
    console.log("Circunferências internas");
}
else if(dist == (r1-r2)){
    console.log("Circunferências tangentes internas");
}
else if(dist < (r1+r2)){
    console.log("Circunferências secantes");
}
else if(dist == (r1+r2)){
    console.log("Circunferências tangentes externas");
}
else if(dist > (r1+r2)){
    console.log("Circunferências externas");
}