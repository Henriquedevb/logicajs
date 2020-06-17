var meioA, A = [7, 8, 9, 5, 1, 6, 4, 3, 2], soma = 0, produto = 1;

if (A.length%2 === 0){
    meioA = A.length/2
    for (let k = 0; k < meioA; k++) {
        soma = soma + A[k]
    }
    for (let i = 0; i < meioA; i++){
        produto = produto * A[i + meioA];
    }
} else {
    meioA = Math.round(A.length/2)
    for (let k = 0; k < meioA; k++) {
        soma = soma + A[k]
    }
    for (let i = 0; i < (meioA - 1); i++){
        produto = produto * A[i + meioA];
    }
}

console.log(`Soma: ${soma}; Produto: ${produto}`)