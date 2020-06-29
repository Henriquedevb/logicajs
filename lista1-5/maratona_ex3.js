const receber = require('prompt-sync')({sigint: true});
let k, N, x1, y1, x2, y2, x3, y3, xl, yl;
console.clear();

x1 = Number(receber('coordenada x do p1: '));
y1 = Number(receber('coordenada y do p1: '));
x2 = Number(receber('coordenada x do p2: '));
y2 = Number(receber('coordenada y do p2: '));
x3 = Number(receber('coordenada x do p3: '));
y3 = Number(receber('coordenada y do p3: '));

N = Number(receber('Casos de teste: '));

for(k = 0; k < N; k++){
    xl = Number(receber('coordenada x do lobo: '));
    yl = Number(receber('coordenada y do lobo: '));
    //continua
}