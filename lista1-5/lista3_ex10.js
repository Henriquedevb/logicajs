const receber = require('prompt-sync')({sigint: true})
let a, b, c, d, x1, x2;
a = receber("Digite o termo A: ");
b = receber("Digite o termo B: ");
c = receber("Digite o termo C: ");
d = b*b - 4 * a * c;
if (d < 0){
    console.log('Raízes imaginárias.');
}
else{
    x1 = (- b + Math.sqrt(d) / (2 * a));
    x2 = (- b - Math.sqrt(d) / (2 * a));
    console.log("x1 = " + x1);
    console.log("x2 = " + x2);
}
