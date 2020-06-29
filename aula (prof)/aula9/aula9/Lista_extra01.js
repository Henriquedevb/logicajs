/*
Questão 1
Desenvolva um algoritmo para calcular a raiz de uma função do 1o grau. 
Caso não lembre o que é uma função do primeiro grau de uma olhada em:
http://www.somatematica.com.br/emedio/funcao1/funcao1.php
*/
const receber = require('prompt-sync')({sigint: true});
let a, b, raiz;
//montar a função
a = Number(receber("Digite o termo a: "));
b = Number(receber("Digite o termo b: "));
raiz = - a/b;
console.log("Raiz = ", raiz);


