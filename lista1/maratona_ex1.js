const receber = require('prompt-sync')({sigint: true});
let k, n, x, y, t, h;

console.clear();
n = Number(receber())

for(k = 0; k < n; k++){
    x = Number(receber());
    y = Number(receber());

    h = (y - 3*x)/3;
    t = x - h;

    console.log(t + " " + h);
}