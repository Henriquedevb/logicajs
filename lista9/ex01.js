const prompt = (require('prompt-sync'))({sigint: true});
let mtx = [], tipoBusca = 0, busca = 0;



mtx = [
    ['Brasília',    '24', '15'],
    ['São Paulo',   '18', '10'],
    ['Natal',       '30', '13'],
    ['Valparaíso',  '27', '17'],
    ['Manaus',      '20', '12']
];
console.log('Digite -1 em qualquer um dos campos para sair.')
while (true) {  
    tipoBusca = Number(prompt('Digite 0 para fazer uma busca sequencial, 1 para fazer uma busca ordenada, 2 para fazer uma busca binária: '));
    busca = Number(prompt('Digite 0 para fazer uma busca pelo nome da cidade, 1 para fazer uma busca pela temperatura e 2 para fazer uma busca pelo horário: ')); 

    if (tipoBusca === -1 || busca === -1) {
        break;
    } else if (tipoBusca === 0) {

    } else if (tipoBusca === 1) {

    } else if (tipoBusca === 2) {

    } else {
        console.log('Erro no tipo da busca.')
    }
    
    
}

function buscaSeq() {

}

function buscaOrd() {

}

function buscaBin() {

}
