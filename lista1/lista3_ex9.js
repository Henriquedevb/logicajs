const receber = require('prompt-sync')({sigint: true});
let n1, n2, n3, n4, m, ex;
console.clear()
n1 = Number(receber('Digite a nota do primeiro bimestre: '));
n2 = Number(receber('Digite a nota do segundo bimestre: '));
n3 = Number(receber('Digite a nota do terceiro bimestre: '));
n4 = Number(receber('Digite a nota do quarto bimestre: '));
m = (n1 + n2 + n3 + n4)/4
if(m >= 7 && m <= 10){
    console.log('A média do aluno foi:', m);
    console.log('Aluno aprovado.')
}
else if(m >= 0 && m < 7){
    ex = Number(receber('Digite a nota do exame: '))
    if(((m + ex)/ 2) >= 5){
      console.log('A média do aluno com o exame foi:', (m + ex)/2)
      console.log('Aprovado em exame.')  
    }
    else{
        console.log('A média do aluno com o exame foi:', (m + ex)/2)
        console.log('Reprovado.')
    }
}
else{
    console.log('Nota inválida.')
}