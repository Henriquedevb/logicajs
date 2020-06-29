const fs = require('fs');

arquivo = fs.readFileSync('meu-arquivo.txt', 'utf-8');

console.log(arquivo);