const receber = require('prompt-sync')({sigint: true})
let num1 , num2, op, res;


while(true){
    num1 = Number(receber('Digite o primeiro número: '));
    op = receber('Digite o operador (+, -, / ou *): ');
    num2 = Number(receber('Digite o segundo número: '));
    res = Number

    if(op == '+'){
        res = (num1 + num2)
        console.log('A soma dos dois números é: ' + res + '.')
    }
    else if(op == '-'){
        res = ((num1 - num2))
        console.log('A subtração dos dois números é: ' + res + '.')
    }
    else if(op == '/'){
        if(num2 == 0){
            console.log('Não é possível dividir por zero.')
        }
        else{
            res = ((num1 / num2))
            console.log('A divisão dos dois números é: ' + res + '.')}
    }
    else if(op == '*'){
        res = ((num1 * num2))
        console.log('A multiplicação dos dois números é: ' + res + '.')
    }
    else{
        console.log('Operador inválido.')
        break;
    }
}
