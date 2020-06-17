const receber = require('prompt-sync')({sigint: 'true'})
let x1, x2, y1, y2; //pontos
x1 = Number(receber('Digite a coordenada x do ponto 1: '));
y1 = Number(receber('Digite a coordenada y do ponto 1: '));
x2 = Number(receber('Digite a coordenada x do ponto 2: '));
y2 = Number(receber('Digite a coordenada y do ponto 2: '));

if(x1 === x2){
    console.log('Theta igual a 90 graus, e o coeficiente angular não pode ser calculado.');
}
else{
    let m = (y2 - y1)/(x2-x1); //formula

    if(0 < m < 90){
        console.log('Coeficiente angular: ' + m);
        console.log('Theta entre 0º e 90º.');
    }
    else if(90 < m < 180){
        console.log('Coeficiente angular: ' + m);
        console.log('Theta maior que 90º.');
    }
    else if(m === 0){
        console.log('Coeficiente angular: ' + m);
        console.log('Theta igual a 0º.');
    }
}
