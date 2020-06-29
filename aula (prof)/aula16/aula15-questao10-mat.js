/*
Questão 10 
Leia uma matriz 5 x 5. Leia também um valor X. O programa deverá fazer 
uma busca desse valor na matriz e, ao final, escrever a localização 
(linha e coluna) ou uma mensagem de “não encontrado”.
*/
const receber = require('prompt-sync')({sigint: true});
console.clear();

mtx = [
         [40, 17, 20, 33, 87],
         [12, 18, 16, 22, 82],
         [55, 10, 14, 11, 34],
         [15, 27, 42, 25, 51],
         [13, 53, 19, 41, 83]
      ];

x = Number(receber("Digite um número: "));

lx = -1;
cx = -1;

//console.log(mtx.length);

for(l=0; l<mtx.length; l++){
    for(c=0; c<mtx[l].length; c++){
        if(mtx[l][c] == x){
            lx = l;
            cx = c
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
    console.log("não encontrado");
}