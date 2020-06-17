const prompt = require('prompt-sync')();

/*function somar(conjunto) {
    
    let soma = 0;
    for(let i = 0; i < conjunto.length; i++){
        soma += Number(conjunto[i]);
    }

    return soma;
}*/

let linha = prompt('Digite quantos valores vc quiser separados por espaço: ');

resultado = linha.split(" ");

console.log(resultado[1] , resultado[3] , resultado[2]);
return

//let soma = somar(valores);
/*
console.log('a soma de tudo eh: ' + soma);*/