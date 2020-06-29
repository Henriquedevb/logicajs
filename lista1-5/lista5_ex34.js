/*Escreva um algoritmo que calcule o resto da divis˜ao de A por B (n´umero inteiros e positivos), ou seja, A mod B, atrav´es de subtra¸c˜oes sucessivas. Esses dois valores s˜ao passados
pelo usu´ario atrav´es do teclado.*/
let receber = require('prompt-sync')();

let A = 0, B = 0, AB = 0, linha = 0, mod = 0;
linha = receber('Informe o valor de A e B separados por um espaço: ');
AB = linha.split(' ');
A = AB[0];
B = AB[1];


