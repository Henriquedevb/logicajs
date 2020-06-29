let receber = require('prompt-sync')({sigint: true});
console.clear();

console.log('Informe, respectivamente, as coordenadas x e y do canto inferior esquerdo e as coordenadas x e y do canto superior direito do alvo: ');

let x1 = Number(receber( ));
let y1 = Number(receber( ));

let x2 = Number(receber( ));
let y2 = Number(receber( ));


console.log('Digite -1 se quiser parar de jogar.');
while (true){
    let t = receber('Cansou? ');
    if (t == -1){
        break;
    }
    let xt = Number(receber('Informe o valor x do ponto onde o dado atingiu a superfície: '));
    let yt = Number(receber('Informe o valor y do ponto onde o dado atingiu a superfície: '));
    if ((xt <= x2 && xt >= x1) && (yt <= y2 && yt >= y1)){
        console.log('Acertou!');
    }
    else{
        console.log('Errou!');
    }
}
console.log('Obrigado por jogar.');
