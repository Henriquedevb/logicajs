let prompt = require('prompt-sync')({sigint: true});
console.clear();

var mtx = [],
    num = 0,
    tmn = Number(prompt('Informe o tamanho do vetor: '));

for(var k = 0 ; k < tmn ; k++){
    num = Number(prompt('Preencha o vetor: '));
    mtx.push(num);
}

for (k = 0 ; k < mtx.length ; k++){
    if(mtx[mtx.length - 1] < mtx[mtx.length - 2]){
        
    }
}

console.log(mtx);