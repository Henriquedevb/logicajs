let prompt = require('prompt-sync')({sigint: true});
console.clear();

let mtx = [],
    num = 0,
    tmn = Number(prompt('Informe o tamanho do vetor: '));

for(let k = 0 ; k < tmn ; k++){
    num = Number(prompt('Preencha o vetor: '));
    mtx.push(num);
}

function ordem() {
    for (let i = 0 ; i < mtx.length - 1 ; i++){
        for (let j = i + 1; j < mtx.length; j++) {
            if (mtx[j] > mtx[i]) {
                [ mtx[i], mtx[j]] = [mtx[j], mtx[i]];
            }
        }
    }

    console.log(mtx);
}
console.log(mtx);

ordem(mtx);