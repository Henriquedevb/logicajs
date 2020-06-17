/*
Considere um plano cartesiano com o eixo X das abiscissas e Y das ordenadas.
Escreveva um programa em linguagem Javascript para receber as coordenadas
de três pontos P1, P2 e P3. Caso os pontos formem um triângulo, calcular 
o perímetro e a área pela fórmula do Teorema de Heron. Veja em: 
https://mundoeducacao.bol.uol.com.br/matematica/formula-heron.htm
*/

// 1) receber as coordenadas de cada um dos três pontos
// 2) calcular as distâncias p1 até p2, p2 até p3 e p3 até p1
// 3) Verificar se formou um triângulo válido lados a, b, c
//    é válido se (a < b+c) E (b < a+c) E (c < a+b)
// 4) ser for válido, calcular e imprimir a área e o perímetro
const receber = require('prompt-sync')({sigint: true});
let x1, y1, x2, y2, x3, y3, a, b, c, area, p;

//recebendo o ponto P1
x1 = Number(receber("Digite o X de P1: "));
y1 = Number(receber("Digite o Y de P1: "));

//recebendo o ponto P2
x2 = Number(receber("Digite o X de P2: "));
y2 = Number(receber("Digite o Y de P2: "));

//recebendo o ponto P3
x3 = Number(receber("Digite o X de P3: "));
y3 = Number(receber("Digite o Y de P3: "));

//calculando distância de p1 até p2 (a)
a = Math.sqrt( Math.pow( (x1-x2), 2 ) + Math.pow( (y1-y2), 2 ));

//calculando distância de p2 até p3 (b)
a = Math.sqrt( Math.pow( (x3-x2), 2 ) + Math.pow( (y3-y2), 2 ));

//calculando distância de p3 até p1 (c)
c = Math.sqrt( Math.pow( (x3-x1), 2 ) + Math.pow( (y3-y1), 2 ));

if( (a<b+c) && (b<a+c) && (c<a+b)){
    p = (a+b+c) / 2;
    area = Math.sqrt( p*(p-a)*(p-b)*(p-c) );

    console.log("Área = " + area);
    console.lot("Perímetro = " + (2*p));
}
else {
    console.log("Não formou triângulo!");
}