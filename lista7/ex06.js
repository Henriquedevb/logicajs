const prompt = (require('prompt-sync'))({sigint: true});

var altTri = Number(prompt('Informe a altura do triângulo: '));

function triangulo(n) {
    var str = '*', novastr = '*', cont = 0;

    while (true) {
        if (cont === n) {
            break;
        }
        novastr = novastr + str;
        cont++;

        console.log(novastr);
    }

}

triangulo(altTri);