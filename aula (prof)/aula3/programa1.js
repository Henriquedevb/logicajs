const receber = require('prompt-sync')({sigint: true});

let nome;
nome = receber ('Qual é o seu nome? ');
console.log(nome);