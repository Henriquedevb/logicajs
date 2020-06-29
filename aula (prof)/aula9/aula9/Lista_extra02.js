/*
Questão 2
Calcule quantos azulejos são necessários para azulejar uma parede. 
É necessário conhecer a altura da parede (AP), a sua largura (LP), 
e a altura do azulejo (AA) e sua largura (LA). Leia os
dados através do teclado (obs.: não considere o rejunte).
*/
const receber = require('prompt-sync')({sigint: true});
let azulejos, AP, LP, AA, LA;

//dados da parede
AP = Number(receber("Altura da parede: "));
LP = Number(receber("Largura da parede: "));

//dados do azulejo
AA = Number(receber("Altura do azulejo: "));
LA = Number(receber("Altura do azulejo: "));