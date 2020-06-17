const receber = require('prompt-sync')({sigint: true})    
let x, y, z;
x = Number(receber("Digite um número: "))
y = Number(receber("Digite outro número: "))
if(x > y){
    z = x - y
    console.log("A diferença do maior pelo menor número é:", z)
}
else{
    z = y - x
    console.log("A diferença do maior pelo menor número é:", z)
}