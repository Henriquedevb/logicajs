function multipRec(n1, n2){

    if(n2 == 1){
        return n1
    }

    return n1 + multipRec(n1, n2 - 1);


}

let prompt = require('prompt-sync')({sigint: true});
console.clear();

num1 = Number(prompt('Digite o multiplicando: '));
num2 = Number(prompt('Digite o multiplicador: '));

console.log(`A multiplicação entre ${num1} e ${num2} é ${multipRec(num1, num2)}`)