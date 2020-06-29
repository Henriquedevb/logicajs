const receber = require('prompt-sync')({sigint: true});
let num = [5, 3, 7, 9, 22, 41, 17, 13, 28, 77, 82, 20, 5, 12, 33];
console.clear();

//tamanho
//tam = num.length;
//console.log(`tamanho = ${tam}`);
saida = "";
for(k=0; k<num.length; k++){
    saida = saida + `${num[k]}, `;
}
console.log(saida);
