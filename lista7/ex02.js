const prompt = (require('prompt-sync'))({sigint: true});
var km, l;

var kilometragem = function(km, l) {
    var consumo = km / l, msg;

    if (consumo < 8) {
        msg = 'Venda o carro!';
    } else if (consumo >= 8 && consumo <= 14){
        msg = 'Econômico.';
    } else {
        msg = 'Super econômico!';
    }
    return msg;
}

km = Number(prompt('Informe os km percorridos: '));
l = Number(prompt('Informe os litros de gasolina queimados: '));

console.log(kilometragem(km, l));