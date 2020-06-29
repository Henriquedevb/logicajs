const prompt = (require('prompt-sync'))({sigint: true});

var excl = Number(prompt('Informe o número de pontos de exclamação: '));

function linhasExcl(n) {
    var cont = 0;
    var str = '!';
    var novastr = '!';

    while (true) {
        if (cont === n) {
            break;
        }
        console.log(novastr);
        novastr = novastr + str;
        cont++;
    }
}

linhasExcl(excl);