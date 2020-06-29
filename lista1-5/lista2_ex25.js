const receber = require('prompt-sync')({sigint: true})
let c, f, x;
console.log("CONVERSOR DE CELSIUS PARA FAHRENHEIT!")
x = Number(receber("Digite 1 para converter de Celsius para Fahrenheit, e digite 2 para converter de Fahrenheit para Celsius: "))
if (x == 1){
    c = receber("Digite a temperatura em ºC: ")
    f = (c * 9/5) + 32
    console.log("A temperatura em ºF é:", f, ".")
}
else if(x == 2){
    f = receber("Digite a temperatura em ºF: ")
    c =  ((f - 32) / 9) * 5
    console.log("A temperatura em ºC é:", c, ".")
}