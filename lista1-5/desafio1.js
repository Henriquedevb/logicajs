const receber = require('prompt-sync')({sigint: true}) 
let idadeMaxima = 0; // a)
let qMulheres18e35 = 0; // b)
let qPessoasCabelosLourosOlhosVerdes = 0; // c)

while (true) {

    let novaIdade;
    let sexo;
    let corOlhos;
    let corCabelos;

    // resposta da A
    novaIdade = receber("Digite a idade: ");

    if (novaIdade === '-1'){
        break;
    }
    
    novaIdade = Number(novaIdade);

    if (novaIdade > idadeMaxima) {
        idadeMaxima  = novaIdade;
    }
    // resposta da B
    while (sexo !== 'masculino' && sexo !== 'feminino'){
        sexo = receber("Digite o sexo: ");
    }
    if (sexo === 'feminino' && novaIdade >= 18 && novaIdade <= 35) {
        qMulheres18e35++;
    }

    // resposta da C
    corCabelos = receber('Digite a cor dos cabelos: ');
    corOlhos = receber('Digite a cor dos olhos: ');

    if (corCabelos === 'louros' && corOlhos === 'verdes') {
        qPessoasCabelosLourosOlhosVerdes++
    }

}

console.log("A maior idade é de: ", idadeMaxima);
console.log("A quantidade de mulheres entre 18 e 35 anos é: ", qMulheres18e35)
console.log('A quantidade de pessoas com cabelos louros e olhos verdes é: ', qPessoasCabelosLourosOlhosVerdes)

