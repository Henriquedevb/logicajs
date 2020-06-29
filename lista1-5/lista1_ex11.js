const receber = require('prompt-sync')({sigint: true})
let n1, n2, s;
console.log("Olá! Vamos calcular a soma dos números no intermalo que você quiser.")
n1 = Number(receber("Digite o primeiro número do intervalo: "))
n2 = Number(receber("Digite o último número do intervalo: "))
s = ((n1 + n2) * n2)/2
console.log("A soma dos números no intervalo de", n1, " a", n2, " é", s+ ".")