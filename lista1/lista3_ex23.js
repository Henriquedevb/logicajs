let receber = require('prompt-sync')({sigint: true});
console.clear();
//entrada dos dados
let x1, y1, x2, y2; //retângulo 1
x1 = Number(receber('Informe o valor x do canto inferior esquerdo do primeiro retângulo: '));
y1 = Number(receber('Informe o valor y do canto inferior esquerdo do primeiro retângulo: '));
x2 = Number(receber('Informe o valor x do canto superior direito do primeiro retângulo: '));
y2 = Number(receber('Informe o valor y do canto superior direito do primeiro retângulo: '));
let x3, y3, x4, y4; //retângulo 2
x3 = Number(receber('Informe o valor x do canto inferior esquerdo do segundo retângulo: '));
y3 = Number(receber('Informe o valor y do canto inferior esquerdo do segundo retângulo: '));
x4 = Number(receber('Informe o valor x do canto superior direito do segundo retângulo: '));
y4 = Number(receber('Informe o valor y do canto superior direito do segundo retângulo: '));
let x5, y5, x6, y6; //retângulo 3
x5 = Number(receber('Informe o valor x do canto inferior esquerdo do terceiro retângulo: '));
y5 = Number(receber('Informe o valor y do canto inferior esquerdo do terceiro retângulo: '));
x6 = Number(receber('Informe o valor x do canto superior direito do terceiro retângulo: '));
y6 = Number(receber('Informe o valor y do canto superior direito do terceiro retângulo: '));
let xa, ya; //animal
xa = Number(receber('Informe o x da localização do animal: '));
ya = Number(receber('Informe o y da localização do animal: '));

//saida dos dados
if(((xa <= x2 && xa >= x1) && (ya <= y2 && ya >= y1))&&((xa <= x4 && xa >= x3) && (ya <= y4 && ya >= y3))&&((xa <= x6 && xa >= x5) && (ya <= y6 && ya >= y5))){
    console.log('O animal consegue obter os três alimentos e irá sobreviver.');
}
else if (((xa <= x2 && xa >= x1) && (ya <= y2 && ya >= y1))&&((xa <= x4 && xa >= x3) && (ya <= y4 && ya >= y3))){
    console.log('O animal consegue obter apenas os alimentos A e B e não irá sobreviver por muito tempo.');
}
else if (((xa <= x2 && xa >= x1) && (ya <= y2 && ya >= y1))&&((xa <= x6 && xa >= x5) && (ya <= y6 && ya >= y5))){
    console.log('O animal consegue obter apenas os alimentos A e C e não irá sobreviver por muito tempo.');
}
else if (((xa <= x4 && xa >= x3) && (ya <= y4 && ya >= y3))&&((xa <= x6 && xa >= x5) && (ya <= y6 && ya >= y5))){
    console.log('O animal consegue obter apenas os alimentos B e C e não irá sobreviver por muito tempo.');
}
else if ((xa <= x2 && xa >= x1) && (ya <= y2 && ya >= y1)){
    console.log('O animal consegue obter apenas o alimento A e não irá sobreviver.');
}
else if ((xa <= x4 && xa >= x3) && (ya <= y4 && ya >= y3)){
    console.log('O animal consegue obter o alimento B e não irá sobreviver.');
}
else if ((xa <= x6 && xa >= x5) && (ya <= y6 && ya >= y5)){
    console.log('O animal consegue obter o alimento C e não irá sobreviver.');
}
else{
    console.log('O animal não consegue obter nenhum dos alimentos e irá morrer.');
}