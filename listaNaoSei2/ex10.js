/*Leia uma matriz 5 x 5. Leia também um valor X. O programa deverá fazer uma busca desse valor
na matriz e, ao final, escrever a localização (linha e coluna) ou uma mensagem de “não
encontrado”.*/
const prompt = require('prompt-sync')({sigint: true});

var mtx = [
    [10, 11, 12, 13, 94],
    [20, 21, 22, 83, 74],
    [30, 31, 32, 33, 54],
    [40, 41, 42, 53, 44],
    [50, 51, 52, 63, 34]
];

x = Number(prompt('Número: ')); 

lx = -1;
cx = -1;

for(var l = 0; l < mtx.length; l++){
    for(var c = 0; c < mtx.length; c++){
        if(mtx[l][c] == x){
            lx = l;
            cx = c;
            break;
        }
    }
    if(lx != -1){
       break; 
    }
}

if(lx != -1){
    console.log(`(${lx}, ${cx})`);
}
else{
    console.log('Não encontrado.');
}