const receber = require('prompt-sync')({sigint: true})
let cont, soma, k, char, num;

soma = 0;
cont = 0;

for(k = 0; k < 5; k++){
    char = receber('Digite a letra: ');
    num = Number(receber('Digite o número: '));
    if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char =='u'){
        soma += num;
    }
    if(char == 'a' && num%2==1){
        cont++;
    }   
}
console.log('Soma: ' + soma , ' e contagem: ' + cont);