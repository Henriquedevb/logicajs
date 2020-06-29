const receber = require('prompt-sync')({sigint: true});
let a, b, c, d, status = "N";

console.clear();
a = Number(receber());
b = Number(receber());
c = Number(receber());
d = Number(receber());

//Teorema de Heron
//(a, b, c), (a, b, d), (a, c, d), (b, c, d)
if ( a+b>c && a+c>b && b+c>a ) {
    status = "S";
}
else if( a+b>d && a+d>b && b+d>a ) {
    status = "S";
}
else if( a+c>d && a+d>c && c+d>a ) {
    status = "S";
}
else if( b+c>d && b+d>c && c+d>b ) {
    status = "S";
}

console.log(status);