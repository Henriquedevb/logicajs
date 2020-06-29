/*
Escreva um programa que converta em um array a string 
"café, açúcar, macarrão, leite, farinha"
*/

texto = "café , açúcar, macarrão, leite , farinha";

lista = texto.split(",");

tam = lista.length;

console.log(`tamanho = ${tam}`);

for(k=0; k<lista.length; k++){
    lista[k] = lista[k].trim();
}

console.log(lista);





