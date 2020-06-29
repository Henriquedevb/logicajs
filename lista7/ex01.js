const prompt = (require('prompt-sync'))({sigint: true});
var nota1 = 0, nota2 = 0, nota3 = 0, letra = '';

function nota(x, nota1, nota2, nota3) {
    var media = 0;

    if (x === 'A' || x === 'a') {
        media = (nota1 + nota2 + nota3) / 3;
    } else if (x === 'P' || x === 'p') {
        media = ((nota1 * 5) + (nota2 * 3) + (nota3 * 2)) / 10;
    }

    return media;
}

letra = prompt('Digite a letra: ');
nota1 = Number(prompt('Digite a primeira nota: '));
nota2 = Number(prompt('Digite a segunda nota: '));
nota3 = Number(prompt('Digite a terceira nota: '));

console.log(`A média do aluno é ${nota(letra, nota1, nota2, nota3)}.`);
