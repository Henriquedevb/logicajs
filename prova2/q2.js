function fOperacao(x,y) {
    return (2 * x + y) / 2;
}

let a = 1; b = 4; c = 5;

for (k = 0; k < 2; k++) {
    a = a + fOperacao(b, c);
}

if (a > 11) {
    c = fOperacao(a, c);
    b = a + 2;
} else {
    c = fOperacao(a, c);
    b = a - 3;
}

console.log(a, b, c);