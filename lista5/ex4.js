function potencia(k, n) {

    if(k == 0){
        return 'indeterminado';
    }

    if(n <= 0){
        return 1;
    }

    return k * potencia(k, n - 1);


}

let prompt = require('prompt-sync')({sigint: true});
console.clear();

numk = prompt('Informe o k: ');
numn = prompt('Informe o n: ');

console.log(`O valor ${numk} elevado a ${numn} é igual a ${potencia(numk, numn)}.`)