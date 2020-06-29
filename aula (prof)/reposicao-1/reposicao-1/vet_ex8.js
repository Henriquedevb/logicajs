/*
Questão 08
Faça um programa que leia um vetor de 5 posições para números reais e, depois, 
um código inteiro. Se o código for zero, finalize o programa; se for 1, mostre o 
vetor na ordem direta; se for 2, mostre o vetor na ordem inversa. Caso, o código 
for diferente de 1 e 2 escreva uma mensagem informando que o código é inválido.
*/
const receber = require('prompt-sync')({sigint: true});
let vet = [5, 7, -9, 22, -41], op;

//console.clear();

do{
    console.clear();
    menu = "";
    menu += "0 - Sair\n";
    menu += "1 - Ordem direta\n";
    menu += "2 - Ordem inversa\n";
    console.log(menu);
    op = Number(receber("Digite uma opção: "));

    switch(op){
        case 0:
            console.log("Obrigado por sua visita!");
            receber();  //faz o programa aguardar pressionar enter
            break;
        case 1:
            //imprimir em ordem direta
            saida = "";
            for(k=0; k<vet.length; k++){
                saida += `${vet[k]}, `;
            }
            console.log(saida);
            receber();  //faz o programa aguardar pressionar enter
            break;
        case 2:
            //imprimir em ordem inversa
            saida = "";
            for(k=vet.length-1; k>=0; k--){
                saida += `${vet[k]}, `;
            }
            console.log(saida);
            receber();  //faz o programa aguardar pressionar enter
            break;
        default:
            console.log("Código inválido!");
            receber();  //faz o programa aguardar pressionar enter
            break;
    }
}while(op != 0);