const receber = require('prompt-sync')({sigint: true});
let n1, n2, n3, n4, m;
n1 = Number(receber('Digite a nota do primeiro bimestre: '));
n2 = Number(receber('Digite a nota do segundo bimestre: '));
n3 = Number(receber('Digite a nota do terceiro bimestre: '));
n4 = Number(receber('Digite a nota do quarto bimestre: '));
m = (n1 + n2 + n3 + n4)/4
if(m < 5){
    console.log('A média do aluno foi:', m);
}