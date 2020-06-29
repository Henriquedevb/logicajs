const prompt = (require('prompt-sync'))({sigint: true});
var num = 0, mtx = [], numBusca = 0, cont = 0;

for (let k = 0; k < 5; k++) {
    num = Number(prompt('Número: '));
    mtx.push(num);
}

numBusca = Number(prompt('Digite o número da busca: '));

for (let i = 0; i < mtx.length; i++) {
    if (mtx[i] === numBusca) {
        cont += 1;
    }
}

cont > 0 ? console.log('Encontrado!') : console.log('Não foi encontrado.');